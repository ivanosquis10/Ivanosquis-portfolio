import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Announcement from './components/Announcement';
import 'boxicons';

const App = () => {
  return (
    <div className="container mx-auto bg-default text-white overflow-x-hidden">
      {/* <Announcement /> */}
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
