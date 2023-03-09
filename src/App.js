import './App.css';
import Header from "./components/header/Header"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Nav from './components/navbar/Nav';
import Project from './components/projects/Project';
import Footer from './components/footer/Footer';
import Experience from './components/skills/Experience';



function App() {
  return (
   <>
   <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
   </>
  );
}

export default App;
