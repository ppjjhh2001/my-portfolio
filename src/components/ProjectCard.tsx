// src/components/ProjectCard.tsx
import React from 'react';

// 포트폴리오 데이터와 동일한 타입 정의
export interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string; // 데모 링크는 없을 수도 있으니 '?'를 붙여줍니다
}

export default function ProjectCard({ title, description, techStack, githubLink, demoLink }: ProjectProps) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginTop: 0, fontSize: '1.5rem' }}>{title}</h3>
      <p style={{ color: '#555', lineHeight: '1.5' }}>{description}</p>
      
      {/* 기술 스택을 뱃지 형태로 나열 */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {techStack.map((tech, index) => (
          <span key={index} style={{
            padding: '4px 8px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* 링크 버튼들 */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href={githubLink} target="_blank" rel="noreferrer" style={{ color: '#0366d6', textDecoration: 'none', fontWeight: 'bold' }}>
          GitHub 보기 ↗
        </a>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" style={{ color: '#28a745', textDecoration: 'none', fontWeight: 'bold' }}>
            데모 보기 ↗
          </a>
        )}
      </div>
    </div>
  );
}