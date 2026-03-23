// src/data/portfolioData.ts
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';

export const personalInfo = {
  name: "박재현",
  role: "Frontend Developer",
  email: "ppjjhh2001@naver.com",
  github: "https://github.com/ppjjhh2001",
  catchphrase: "끈기와 실력으로 신뢰를 만드는 개발자 박재현입니다!",
};

export const projects = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    description: "React와 TypeScript를 활용하여 제작한 반응형 원페이지 포트폴리오입니다.",
    imageUrl: pro1,
    techStack: ["React", "TypeScript", "Vite"],
    features: [
      "개인 프로젝트"
    ],
    githubLink: "https://github.com/ppjjhh2001/my-portfolio",
    demoLink: "https://ppjjhh2001.github.io/my-portfolio/",
  },
  {
    id: 2,
    title: "RE:Town",
    description: "React로 구현한 지역 기반 구인구직 및 여행 플랫폼입니다.",
    imageUrl: pro2,
    techStack: ["React", "React Router", "Context API"],
    features: [
      "frontend 개발","api 연동"
    ],
    githubLink: "https://github.com/ppjjhh2001/capstone_10",
    //demoLink: "https://capstone_10.github.io/",
  },
  {
    id: 3,
    title: "사장님 출입금지",
    description: "아르바이트 노동자를 위한 급여 계산 및 정보 제공 앱",
    //imageUrl: pro3, // Assuming you have an image for this project
    techStack: ["Java", "Firebase", "Android Studio"],
    features: [
      "Android 앱 개발"
    ],
    //githubLink: "https://github.com/ppjjhh2001/my-portfolio",
    //demoLink: "https://ppjjhh2001.github.io/my-portfolio/",
  },
];