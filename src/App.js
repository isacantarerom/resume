import {useState} from 'react';
import './App.css';
//import PalettePreview from './components/PalettePreview';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroPitch from './components/HeroPitch';
import WorkExperience from './components/WorkExperience';
import NavButton from './components/NavButton';
import Skills from './components/Skills'

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="app-container">
      <Header/>
      <div className="container-fluid">
        <div className="row row-custom">

          {/*Sidebar - Left Column */}
          <div className="col-md-3 d-flex flex-column align-items-center py-4">
            {/* TBD img aqui de mi */}
            <NavButton 
              label = "Home"
              onClick={()=> setActiveSection("hero")}
              isActive={activeSection === "hero"}
            />
            <NavButton
              label = "Work Experience"
              onClick={()=> setActiveSection("workexperience")}
              isActive={activeSection  ==="workexperience"}
            />
            <NavButton
              label = "Skills"
              onClick={()=> setActiveSection("skills")}
              isActive={activeSection  ==="skills"}
            />
          </div>

        {/* Main Content - Right Column -- main-content*/}
        <div className="col-md-9 p-4">
          {activeSection === "hero" && <HeroPitch/>}
          {activeSection === "workexperience" && <WorkExperience/>}
          {activeSection === "skills" && <Skills/>}
        </div>

      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
