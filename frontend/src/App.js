import './App.css';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer'; 
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
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
