import Header from "../organisms/header";
import Layout from "../templates/layout";
import Navigation from "../organisms/navigation";
import Search from "../organisms/search";

import "../styles/app.css";

function App() {
  return (
    <div>
      <Layout>
        <Navigation />
        <Search />
        <Header />
      </Layout>
    </div>
  );
}

export default App;
