export const portfolioData = {
  personal: {
    name: "변지욱",
    role: "프론트엔드 개발자",
    email: "nba2005kings@gmail.com",
    github: "https://github.com/biglol10",
    blog: "https://biglol.tistory.com/",
    intro: `2018년부터 LG CNS에서 신한은행, 신세계, LG전자 등 대형 프로젝트를 수행하며 
설계부터 배포까지 책임져왔습니다. Javascript 동작 원리부터 best practice까지 
기본에 충실하며, 업무 외 시간에도 출퇴근 시간을 활용해 기술을 체계적으로 학습하고 
사이드 프로젝트로 풀스택 역량을 키우는 등 매일 성장하는 개발자입니다.`,
  },

  about: `
  [협업을 중요시하는 개발자]

풀스택 개발자로 시작해 현업과 직접 소통하며 사용자 업무를 개선하는 경험을 쌓았습니다. 배포 자동화와 에러 모니터링 시스템을 구축하면서 네트워크, 서버 개발자와의 협업의 중요성을 깨달았고, 협조적인 태도와 커뮤니케이션으로 업무에 임하는 사람으로 성장했습니다.

신한은행에서 공통 컴포넌트를 설계하며 협업 체계를 구축했고, 신세계에서는 현업 피드백을 반영한 UX 개선을 주도했습니다. LG전자 프로젝트에서는 Frontend SA로 모노레포 아키텍처를 설계하고 성능을 개선하며(Lighthouse 70점→90점, 번들 98% 감소), 아키텍트로서의 역량을 쌓았습니다.

협업을 통한 생산성 개선과 고객 경험 최적화, 이 두 가지가 제 커리어의 핵심입니다. 어려운 기술적 과제 앞에서도 끝까지 책임지고 해결하며, 논리적 설득과 협업으로 팀과 함께 성장하는 개발자입니다.`,

  skills: [
    // Frontend
    { name: "JavaScript", icon: "JavaScriptIcon", category: "Frontend" },
    { name: "TypeScript", icon: "TypeScriptIcon", category: "Frontend" },
    { name: "React", icon: "ReactIcon", category: "Frontend" },
    { name: "Next.js", icon: "NextJsIcon", category: "Frontend" },
    { name: "Tailwind CSS", icon: "TailwindIcon", category: "Frontend" },

    // State Management & Data Fetching
    {
      name: "React Query",
      icon: "ReactQueryIcon",
      category: "State Management",
    },
    { name: "Zustand", icon: "ZustandIcon", category: "State Management" },

    // Build Tools & Dev Tools
    { name: "Vite", icon: "ViteIcon", category: "Build Tools" },
    { name: "Git", icon: "GitIcon", category: "Build Tools" },

    // Backend & Database
    { name: "Node.js", icon: "NodeJsIcon", category: "Backend" },
    { name: "Express", icon: "ExpressIcon", category: "Backend" },
    { name: "Spring Boot", icon: "SpringBootIcon", category: "Backend" },
    { name: "MySQL", icon: "MySQLIcon", category: "Backend" },
    { name: "MongoDB", icon: "MongoDBIcon", category: "Backend" },

    // Tools & Others
    { name: "Storybook", icon: "StorybookIcon", category: "Tools" },
    { name: "Figma", icon: "FigmaIcon", category: "Tools" },
    { name: "AWS", icon: "AWSIcon", category: "Tools" },
    { name: "Docker", icon: "DockerIcon", category: "Tools" },
  ],

  experience: [
    {
      company: "LG CNS",
      position: "선임 | 빌드센터",
      period: "2018. 08. ~ 재직 중",
      projects: [
        {
          title: "LG전자 AI Commerce 챗봇",
          period: "2025. 05. ~ 2025. 09.",
          role: "Frontend Software Architect",
          description:
            "LG전자 온라인 쇼핑몰에서 고객 문의를 처리할 수 있는 AI 챗봇 서비스 (www.lge.co.kr 내 AI챗봇)",
          tags: ["React", "TypeScript", "Zustand", "React Query", "Vite"],
          details: {
            overview:
              "LG전자 온라인 쇼핑몰에서 고객 문의처리와 쇼핑도움을 받을 수 있는 AI챗봇 서비스",
            techStack: [
              "JavaScript",
              "React",
              "TypeScript",
              "Zustand",
              "React-hook-form",
              "Zod",
              "React-Query",
              "Vite",
            ],
            achievements: [
              {
                category: "프론트엔드 아키텍처 설계 및 최적화",
                items: [
                  "모노레포 구조 설계로 코드 재사용성 및 유지보수성 향상",
                  "Context API → Zustand + React Query 전환으로 불필요한 리렌더링 제거 및 useEffect 사용량 감소",
                  "절대경로 설정 및 Storybook 경로 구성으로 개발 효율성 향상",
                ],
              },
              {
                category: "성능 최적화",
                items: [
                  "FE빌드 결과물을 Next.js public 폴더 배포로 전환하여 CDN캐싱 활용 (네트워크 시간 70% 감소)",
                  "폰트를 CDN으로 이전하여 번들 사이즈 2700KB → 50KB로 감소시켜 render blocking 해소 및 Lighthouse 성능 점수 70점 → 90점으로 향상",
                  "인프라팀과 협업하여 정적 자원들 CDN으로 이전하여 라이브러리 모드 빌드 번들 사이즈 감소",
                  "Library빌드, 프록시, 절대경로 등 관련 Vite 설정들 재구성 및 Terser vs ESBuild 성능 비교 후 ESBuild 도입으로 빌드 속도 개선",
                ],
              },
              {
                category: "API 통신 및 데이터 처리 개선",
                items: [
                  "BFF(Backend for Frontend) 패턴으로 서비스별 상이한 API Response 정제 및 공통화",
                  "@microsoft/fetch-event-source라이브러리 도입으로 AI답변 스트리밍 연결 안정성 향상",
                  "ResponseNormalizer 유틸리티 개발로 200 상태코드 내 실제 에러 케이스 정규화",
                ],
              },
              {
                category: "크로스 플랫폼 대응 및 보안",
                items: [
                  "Android/iOS 앱 종료 시점 대응 로직 및 만족도 조사 진입 로직 구현",
                  "부모-팝업 간 세션 공유 및 대화 맥락 유지 시스템 구축",
                  "CORS정책/네트워크 분석 및 인프라팀 협업으로 폰트 로딩 이슈 해결",
                  "Kong Gateway 쿠키 용량 제한(8KB) 이슈 발견 및 증설 요청",
                ],
              },
              {
                category: "개발 표준화 및 협업 체계 구축",
                items: [
                  "Husky + Commitlint 도입으로 일관된 커밋 메시지 및 코드 품질 관리",
                  "ESLint 공통 설정(packages/eslint-config) 패키지화로 프로젝트 간 재사용성 확보",
                  "개발 가이드 문서 작성 및 팀원 코드 리뷰 진행으로 지식 공유",
                  "Gitlab ci 및 package.json 스크립트를 수정하여 환경별로 맞는 변수들을 참조하여 빌드되도록 개선",
                ],
              },
              {
                category: "사용자 경험 및 개발 생산성 개선",
                items: [
                  "팝업 로드 시 즉시 발화 기능 구현 (쿠키 기반 로그인 상태 판별)",
                  "진입(로딩) 페이지에서 사전 작업 및 데이터 prefetching 구현으로 메인 화면 즉시 사용 가능 및 레이아웃 안정성 향상",
                  "React-hook-form 도입으로 form 및 validation관련 코드 간소화",
                  "Fosslight_dependency 및 license-checker를 활용한 오픈소스 라이선스 점검 및 문서화",
                ],
              },
            ],
          },
        },
        {
          title: "신세계백화점 디지털스토어 구축",
          period: "2023. 05. ~ 2023. 12.",
          role: "개발자",
          description: "신세계백화점 앱 리뉴얼 및 백오피스 관리 시스템 구축",
          tags: ["React", "React Admin", "Zustand", "Spring Boot"],
          details: {
            overview: "신세계백화점 앱 리뉴얼 및 백오피스 관리 시스템 구축",
            techStack: [
              "JavaScript",
              "React",
              "React Admin",
              "Spring Boot",
              "Zustand",
              "Styled Component",
              "MySQL",
            ],
            achievements: [
              {
                category: "백오피스 업무 화면 개발",
                items: [
                  "브랜드 관리 및 앱 메인 컨텐츠 관리 화면 개발",
                  "이미지 좌표 기반 상품 매핑 컴포넌트 개발로 직관적인 상품 연결 기능 제공",
                  "이미지/동영상 첨부 및 대체텍스트 입력 개발",
                  "사용자 권한 기반 화면 접근 및 기능 제한 구현",
                ],
              },
              {
                category: "앱 화면 개발 및 사용자 경험 개선",
                items: [
                  "전시상품 상세페이지 및 브랜드 찾기 페이지 개발",
                  "뒤로가기 시 스크롤 위치 복원 기능으로 사용자 탐색 경험 개선",
                  "브랜드 팔로우/언팔로우 상태 실시간 동기화 구현",
                  "신세계 브랜드 pick 및 사용자별 추천 브랜드 정보 표시",
                ],
              },
              {
                category: "상태 관리 및 알림 기능 개선",
                items: [
                  "React-query + Context Provider 조합으로 리렌더링 문제 해결",
                  "카카오 알림톡 연동으로 라이브 방송 알림 기능 개발",
                ],
              },
            ],
          },
        },
        {
          title: "신한은행 NewApp(Sol) 디지털 체질개선",
          period: "2022. 02. ~ 2022. 10.",
          role: "선도개발",
          description: "신한은행 디지털 체질개선 프로젝트 선도개발 인원 참여",
          tags: ["React", "JavaScript", "SCSS", "Storybook"],
          details: {
            overview: "신한은행 디지털 체질개선 NewApp(Sol) 프로젝트 선도개발",
            techStack: ["JavaScript", "React", "SCSS"],
            achievements: [
              {
                category: "공통 컴포넌트 개발",
                items: [
                  "공통 파트 담당자로서 화면설계서 분석 및 공통 컴포넌트 추출 및 개발",
                  "Atomic Design 패턴 적용하여 bottom-up 방식으로 재사용 가능한 컴포넌트 설계",
                  "Drawer, Calendar, Slider 등 npm 라이브러리 분석 후 신한은행 스타일 맞춤 개발",
                  "다양한 use case 대응을 위한 props 설계 및 prop-types로 타입 가이드 제공",
                ],
              },
              {
                category: "개발자 협업 효율성 향상",
                items: [
                  "컴포넌트별 Storybook과 Example Page 작성으로 페이지 개발자 지원",
                  "회원가입, 이체 관련 웹뷰 화면 template 및 커스텀 훅 개발",
                ],
              },
              {
                category: "성능 최적화",
                items: [
                  "Route별 Dynamic Loading 적용으로 초기 화면 진입 속도 50% 향상",
                  "Webpack-bundle-analyzer로 chunk file 분석 및 분리 / Lazy loading 적용",
                  "Modal, Drawer를 app.jsx에 전역 선언 후 redux + custom hooks로 호출하여 코드 간결화",
                  "AOS, IOS 각각 Input 클릭 이벤트에 따른 커스텀 보안키패드 show/hide 동작 로직 구현",
                ],
              },
            ],
          },
        },
        {
          title: "LG화학 석유화학 생산/품질 정보화",
          period: "2019. 08. ~ 2021. 08.",
          role: "Fullstack Developer",
          description: "LG화학 전사적 MES 생산시스템 구축 및 운영",
          tags: ["#협업", "#생산성개선", "#고객경험"],
          details: {
            overview: "LG화학 여수공장 MES 생산시스템 구축 및 운영",
            techStack: [
              "C#",
              "ASP.NET",
              "JavaScript",
              "jQuery",
              "MS-SQL",
              "Chart.js",
              "RealGrid",
            ],
            achievements: [
              {
                category: "현업 중심 UX 개선",
                items: [
                  "현업과 직접 소통하며 생산관리 업무 프로세스 개선",
                  "엑셀 복사/붙여넣기로 grid입력 가능하게 개발",
                  "Undo, 수정, 에러, 등 여러 케이스에 대한 로직 구현하여 현업 업무 효율성 증가",
                ],
              },
              {
                category: "생산성 도구 개발 - 배포 자동화",
                items: [
                  "C# 배포 관리 프로그램 개발 (10개 서버 자동 배포 + 롤백)",
                  "배포 시간 1시간 -> 10분으로 단축 및 롤백 상황 대응",
                ],
              },
              {
                category: "모니터링 시스템 구축",
                items: [
                  "C# 으로 이벤트 로그 수집 및 DB에 적재하는 프로그램 개발",
                  "Chart.js + RealGrid 기반 관리자 대시보드 개발 및 에러 케이스 해결 내용을 기록할 수 있도록 기능 개발",
                  "장애 인지: 30분 -> 5분, 에러 처리: 30분 -> 10분",
                  "장애 90%, 대응시간 감소에 기여하여 팀 내 올해의 프로젝트로 선정되고 타 운영팀에서도 4년 이상 해당 기능 적극 활용",
                ],
              },
              {
                category: "성능 개선",
                items: [
                  "SQL 재귀로 자재 관계도 계산 로직 개선",
                  "DB 부하가 큰 프로시저 분리 및 C# LINQ 활용",
                ],
              },
            ],
          },
        },
      ],
    },
  ],

  projects: [
    {
      title: "Loado v2 Renew - 로스트아크 아이템 시세 정보 플랫폼",
      description:
        "체계적인 아키텍처와 성능 모니터링 시스템을 갖춘 로스트아크 게임 정보 제공 플랫폼",
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "React Query",
        "Zustand",
        "Material UI",
        "MongoDB",
      ],
      link: "https://github.com/biglol10/loado-v2-frontend-renew",
      period: "2024. 11. ~ 2025. 05.",
      details: {
        overview:
          "기존 로스트아크 정보 사이트를 전면 리팩토링하여 고급 아키텍처와 성능 최적화를 적용한 프로젝트",
        techStack: [
          "React 18",
          "TypeScript",
          "Vite",
          "React Query",
          "Zustand",
          "Material UI",
          "Axios",
          "i18next",
        ],
        achievements: [
          {
            category: "체계적인 캐싱 전략 설계 및 구현",
            items: [
              "React Query 기반 계층적 캐싱 시스템 구축 (정적/중간/동적/사용자 데이터별 차별화)",
              "리소스별 최적화된 staleTime 및 gcTime 설정으로 불필요한 API 호출 최소화",
              "Cache Key 관리 시스템 구축으로 일관된 캐시 무효화 전략 구현",
              "캐싱 설정 유틸리티(getCachingConfig) 개발로 개발자 편의성 향상",
            ],
          },
          // {
          //   category: "실시간 성능 모니터링 시스템 구축",
          //   items: [
          //     "페이지 로드 성능 자동 측정 (FCP, LCP, CLS, FID 등 Core Web Vitals)",
          //     "API 호출 성능 추적 시스템 구현 (응답 시간, 상태 코드, 엔드포인트별 분석)",
          //     "컴포넌트 렌더링 성능 측정 훅(useRenderPerformance) 개발",
          //     "메모리 사용량 모니터링 및 실시간 성능 대시보드 제공",
          //     "useMonitoredQuery 훅으로 React Query 성능 자동 추적",
          //   ],
          // },
          {
            category: "확장 가능한 프로젝트 아키텍처",
            items: [
              "기능별 모듈화된 디렉토리 구조 설계 (apis, components, pages, store, utils 분리)",
              "Zustand 기반 전역 상태 관리로 prop drilling 제거",
              "TypeScript 타입 시스템을 통한 런타임 에러 사전 방지",
              "i18next를 활용한 다국어 지원 시스템 구축",
            ],
          },
          {
            category: "개발 생산성 향상",
            items: [
              "Vite 빌드 시스템 도입으로 HMR 및 빌드 속도 최적화",
              "Husky를 활용한 pre-commit 훅 설정으로 코드 품질 관리",
              "ESLint 및 Prettier 설정으로 일관된 코드 스타일 유지",
              "MSW(Mock Service Worker)를 활용한 API 모킹으로 독립적인 프론트엔드 개발 환경 구축",
            ],
          },
          {
            category: "성능 최적화 및 사용자 경험",
            items: [
              "React Query의 Prefetching 전략으로 사용자 경험 개선",
              "번들 사이즈 분석 및 최적화 (bundleReport 디렉토리 활용)",
              "Code Splitting 및 Lazy Loading 적용으로 초기 로딩 속도 개선",
              "Material UI 테마 커스터마이징으로 일관된 디자인 시스템 구축",
            ],
          },
          {
            category: "품질 관리 및 베스트 프랙티스",
            items: [
              "환경별 설정 분리 (local, dev, prod) 및 환경 변수 관리",
              "절대 경로 import 설정으로 코드 가독성 향상",
              "API 에러 핸들링 및 재시도 로직 구현",
              "성능 모니터링 데이터 기반 지속적인 최적화 수행",
            ],
          },
        ],
      },
    },
    {
      title: "DTech - 팀 협업 도구",
      description:
        "Slack 클론 기반의 팀 스킬셋 대시보드와 실시간 채팅을 제공하는 협업 플랫폼",
      tags: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Socket.io",
        "Express",
        "MySQL",
        "AWS EC2",
        "AWS RDS",
      ],
      link: "https://github.com/biglol10/DTech_FE",
      demoLink: "https://dtech-app.vercel.app",
      period: "2022. 05. ~ 2022. 10.",
      details: {
        overview: "팀원 스킬셋 현황 파악과 실시간 채팅을 통한 팀 내 협업 도구",
        techStack: [
          "JavaScript",
          "React",
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "Socket.io",
          "SCSS",
          "Express",
          "MySQL",
          "AWS",
        ],
        achievements: [
          {
            category: "아키텍처 설계 및 프로젝트 설정",
            items: [
              "Slack UI를 기반으로 한 디자인 시스템 설계 및 Figma로 팀원과 디자인 공유",
              "Webpack, TypeScript 설정 및 개발/운영 환경 분리 (basePath, 절대경로)",
              "Next.js Image 최적화를 위한 domains 등록 및 ESLint/Prettier 설정",
            ],
          },
          {
            category: "재사용 가능한 컴포넌트 시스템",
            items: [
              "Atomic Design 패턴 적용으로 UI 라이브러리 구축 (bottom-up 방식)",
              "Storybook 작성 및 절대경로 설정으로 컴포넌트 공유 및 테스트 용이성 확보",
              "SASS-loader 적용 시 디버깅을 위해 hash 클래스명 앞에 컴포넌트명 자동 추가",
            ],
          },
          {
            category: "성능 최적화",
            items: [
              "Next.js Image 컴포넌트 및 data pre-fetching, SSR 기법으로 Lighthouse 성능 90점 이상 달성",
              "채팅 페이지 초기 로딩 시 일주일 치 대화내역만 표시 후 필요시 이전 내용 로드하여 성능 50% 개선",
              "IntersectionObserver를 이용한 이미지 lazy loading으로 렌더링 성능 개선",
            ],
          },
          {
            category: "Next.js 고급 기능 활용",
            items: [
              "middleware.ts를 이용한 미인증 사용자 접근 제한",
              "Quill 기반 Slack 스타일의 커스텀 에디터 개발",
              "Dynamic Layout 적용 및 _app.tsx, _document.tsx 커스터마이징",
              "SEO 최적화를 위한 semantic tag 및 meta 태그 설정",
            ],
          },
          {
            category: "실시간 채팅 및 주요 기능",
            items: [
              "Socket.io를 이용한 실시간 개인/그룹 채팅 구현",
              "팀 스킬셋 현황 대시보드 및 데이터 시각화",
              "대화방 생성, 멤버 초대, 알림 시스템 구현",
            ],
          },
          {
            category: "배포 및 인프라",
            items: [
              "Vercel을 통한 프론트엔드 배포",
              "Docker + AWS EC2로 백엔드 서비스 구축",
              "Route53 + CloudFront를 이용한 HTTPS 적용",
            ],
          },
        ],
      },
    },
  ],

  certifications: [
    {
      name: "SQL 개발자",
      issuer: "한국데이터베이스진흥원",
      date: "2023. 04.",
    },
    // {
    //   name: "TensorFlow Developer Certificate",
    //   issuer: "TensorFlow",
    //   date: "2022. 04.",
    // },
  ],
};
