// src/App.tsx
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About'; // 💡 추가
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { personalInfo } from './data/portfolioData';

function App() {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Header />
      <main>
        <div id="hero">
          <Hero
            name={personalInfo.name}
            role={personalInfo.role}
            catchphrase={personalInfo.catchphrase}
            github={personalInfo.github}
          />
        </div>
        
        <About /> 
        
        <div id="projects">
          <Projects />
        </div>
        <Contact />
      </main>
    </div>
  );
}

export default App;