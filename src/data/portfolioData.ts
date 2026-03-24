// src/data/portfolioData.ts
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';

export const personalInfo = {
  name: "박재현",
  role: "Frontend Developer",
  email: "ppjjhh2001@naver.com",
  github: "https://github.com/ppjjhh2001",
  catchphrase: "6년의 성실함으로 팀의 빈틈을 채우는 조력자, 개발자 박재현",

  aboutMe: `"안 되는 이유를 찾기보다, 되게 만드는 방법을 찾는 개발자 박재현입니다."
가장 기억에 남는 성장의 순간은 대학교 캡스톤 디자인 프로젝트였습니다. 당시 프로젝트의 핵심이었던 RBAC구현 부분에서 예상치 못한 기술적 난관에 부딪혔습니다. 계속되는 에러와 촉박한 일정 압박 속에 팀원들 모두가 해당 기능의 구현을 포기하고 쉬운 길로 우회하자고 의견을 모았습니다.
하지만 저는 그 기능이 우리 프로젝트의 본질이자 완성도를 위해 절대 타협할 수 없는 부분이라고 생각했습니다. 모두가 멈춘 그 지점에서, 저는 홀로 수십 페이지의 해외 기술 블로그를 번역해 가며 밤낮없이 파고들었습니다. 
수도 없이 쏟아지는 빨간 에러 메시지 앞에서도 좌절하지 않고, 문제를 아주 작은 단위로 쪼개어 가설을 세우고 테스트를 반복했습니다. 결국 며칠 간의 끈질긴 디버깅 끝에 원인을 찾아내어 기어코 해당 기능을 성공적으로 구현해 냈고, 프로젝트를 성공적으로 마무리할 수 있었습니다.
이 경험을 통해 저는 두 가지를 배웠습니다. 첫째, 아무리 복잡한 문제라도 끝까지 물고 늘어지면 결국 해결할 수 있다는 '개발자로서의 자신감'입니다. 둘째, 내 코드와 프로젝트에 대한 '끝없는 책임감'입니다. 
실무에서도 분명 수많은 버그와 한계에 부딪히겠지만, 캡스톤 프로젝트에서 보여주었던 끈기와 집요함으로 절대 도망치지 않고 결국 해답을 찾아내는 든든한 팀원이 되겠습니다.`,
  education: "한신대학교 컴퓨터공학 전공 (2020.03 - 2026.06 예정)",
  skills: ["React", "TypeScript", "Next.js", "JavaScript", "HTML/CSS"]
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