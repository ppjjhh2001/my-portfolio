// src/sections/Hero.tsx
import React from 'react';

// 들어올 데이터의 '타입'을 정의해 줍니다 (TypeScript의 장점!)
interface HeroProps {
  name: string;
  role: string;
  catchphrase: string;
  github: string;
}

export default function Hero({ name, role, catchphrase, github }: HeroProps) {
  return (
    <section style={{ 
      height: '100vh', // 화면 전체 높이 사용
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
        안녕하세요, 저는 <strong>{name}</strong>입니다.
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#666', marginBottom: '20px' }}>
        {role}
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        {catchphrase}
      </p>
      
      <a 
        href={github} 
        target="_blank" 
        rel="noreferrer" 
        style={{ 
          padding: '12px 24px', 
          backgroundColor: '#24292e', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        GitHub 구경하기
      </a>
    </section>
  );
}