import React from 'react';

import Layout from '../templates/layout';
import Search from './search';
import PostsDisplay from './posts-display';
import Subscribe from '../atoms/subscribe';
import Happening from '../atoms/happening';
import Follow from '../atoms/follow';
import Navigation from './navigation';

function Dashboard({theme, avatar, postData}) {

  return (
    <div>
      <Layout>
        <Navigation themeMode={theme} avatar={avatar}/>
        <Search />
        <PostsDisplay avatar={avatar} data={postData}/>
        <Subscribe theme={theme}/>
        <Happening />
        <Follow />
      </Layout>
    </div>
  );
}

export default Dashboard;