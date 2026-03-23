// src/sections/Contact.tsx
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" style={{ 
      padding: '100px 20px', 
      textAlign: 'center', 
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: '50px'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '800' }}>Contact Me</h2>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '40px' }}>
        새로운 프로젝트 제안이나 커피챗은 언제나 환영합니다! ☕
      </p>
      
      <a 
        href={`mailto:${personalInfo.email}`} 
        style={{ 
          padding: '16px 32px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '50px',
          fontWeight: '700',
          fontSize: '1.1rem',
          boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)'
        }}
      >
        이메일 보내기 ✉️
      </a>
    </section>
  );
}