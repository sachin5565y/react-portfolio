import './App.css';
import Header from './component/header/Header.js'
import Nav from './component/nav/Nav.js';
import About from './component/about/About.js';
import Experience from './component/experience/Experience';
import Services from './component/services/Services';
import Portfolio from './component/portfolio/Portfolio'
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer'
function App() {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Contact/>
   <Footer/>


   </>
  );
}

export default App;
