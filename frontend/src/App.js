import logo from './logo.svg';
import './App.css';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer'; 
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <Box>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Box>
  );
}

export default App;
