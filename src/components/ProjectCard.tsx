// src/components/ProjectCard.tsx
export interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  features?: string[];
  imageUrl?: string;
}

export default function ProjectCard({ title, description, techStack, githubLink, demoLink, features, imageUrl }: ProjectProps) {
  return (
    <div style={{
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '30px',
      margin: '15px 0',
      backgroundColor: '#1e293b',
      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
      overflow: 'hidden',
    }}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={`${title} 스크린샷`} 
          style={{ width: '100%', height: 'auto', display: 'block', borderBottom: '1px solid rgba(255,255,255,0.1)' }} 
        />
      )}
      <div style={{ padding: '30px' }}>
      <h3 style={{ marginTop: 0, fontSize: '1.8rem', color: '#f8fafc' }}>{title}</h3>
      <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '1.1rem' }}>{description}</p>
      
      {features && features.length > 0 && (
        <div style={{ margin: '20px 0', padding: '15px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#cbd5e1', fontSize: '1rem' }}>주요 구현 기능</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#94a3b8', lineHeight: '1.6' }}>
            {features.map((feature, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '20px 0' }}>
        {techStack.map((tech, index) => (
          <span key={index} style={{
            padding: '6px 12px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            color: '#60a5fa',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 'bold', borderBottom: '1px solid #f8fafc', paddingBottom: '2px' }}>
            GitHub ↗
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold', borderBottom: '1px solid #3b82f6', paddingBottom: '2px' }}>
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
    </div>
  );
}