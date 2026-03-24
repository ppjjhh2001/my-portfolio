// src/components/Header.tsx
export default function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '20px 40px', 
      position: 'sticky', 
      top: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 1000
    }}>
      <div style={{ fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
        MyPortfolio<span style={{ color: '#3b82f6' }}>.</span>
      </div>
      <nav style={{ display: 'flex', gap: '30px' }}>
        <a href="#hero" style={{ textDecoration: 'none', color: '#cbd5e1', fontWeight: '500', transition: '0.2s' }}>Home</a>
        <a href="#about" style={{ textDecoration: 'none', color: '#cbd5e1', fontWeight: '500', transition: '0.2s' }}>About me</a>
        <a href="#projects" style={{ textDecoration: 'none', color: '#cbd5e1', fontWeight: '500', transition: '0.2s' }}>Projects</a>
        <a href="#contact" style={{ textDecoration: 'none', color: '#cbd5e1', fontWeight: '500', transition: '0.2s' }}>Contact</a>
      </nav>
    </header>
  );
}