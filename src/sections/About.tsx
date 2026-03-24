// src/sections/About.tsx
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" style={{ 
      padding: '100px 20px',
      textAlign: 'center',
      maxWidth: '900px', 
      margin: '0 auto',
      lineHeight: '1.8'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', fontWeight: '800' }}>About Me</h2>
      
      <div style={{ 
        backgroundColor: '#1e293b', 
        padding: '40px', 
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* 자기소개 본문 */}
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', whiteSpace: 'pre-line', marginBottom: '30px',textAlign: 'left' }}>
          {personalInfo.aboutMe}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
          {/* 학력 정보 */}
          <div>
            <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🎓 Education</h4>
            <p style={{ color: '#94a3b8' }}>{personalInfo.education}</p>
          </div>
          {/* 핵심 기술 */}
          <div>
            <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>🛠 Skills</h4>
            <p style={{ color: '#94a3b8' }}>{personalInfo.skills.join(', ')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}