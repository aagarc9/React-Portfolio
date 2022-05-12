import React, { useState } from "react";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';


function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { 
      name: "portfolio" 
    },
    { 
      name: "contact" 
    },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <NavBar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></NavBar>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
