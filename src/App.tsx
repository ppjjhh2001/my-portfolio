// src/App.tsx
import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { personalInfo } from './data/portfolioData';

function App() {
  return (
    // 💡 fontFamily 설정 제거! (index.css 설정이 알아서 적용됨)
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
        
        <div id="projects">
          <Projects />
        </div>
        
        <Contact />
      </main>
    </div>
  );
}

export default App;