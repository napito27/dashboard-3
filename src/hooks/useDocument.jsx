import React from 'react';

import { projectFirestore } from '../firebase/config';

export const useDocument = (collection, id) => {
  const [document, setDocument] = React.useState(null);
  const [error, setError] = React.useState(null);

  // realtime data for document 
  React.useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot((snapshot) => {
      if (snapshot.data()) {
        setDocument({...snapshot.data(), id: snapshot.id});
        setError(null);
      }
      else {
        setError('document does not exist');
      }
    }, (err) => {
      console.log(err.message);
      setError('failed to get document');
    })
    return () => unsubscribe();

  }, [collection, id]);

  return { document, error }

}
