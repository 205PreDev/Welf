your-project-name/

├── index.html                   // 홈
├── Category.html               // 카테고리
├── Calc.html                   // 소득분위 계산기
├── MyWelf.html                 // 내 복지
├── MyInfo.html                 // 내 정보
├── Search.html                 // 복지 검색
├── Welfaredetail.html          // 복지 상세

├── assets/                     // 정적 자원
│   ├── img/
│   │   └── logo.png
│   └── fonts/
│       └── NotoSansKR.woff2     // 웹폰트

├── css/                        // 스타일시트
│   ├── common.css              // 공통 레이아웃 및 기본 스타일
│   ├── style.css               // 페이지 전역 스타일
│   ├── components/             // UI 컴포넌트별 스타일
│   │   ├── button.css
│   │   └── modal.css
│   └── utils/                  // 스타일 유틸리티 (reset, 변수 등)
│       ├── reset.css
│       └── variables.css

├── js/                         // JavaScript 코드
│   ├── app.js                  // 앱 초기화/라우팅
│   ├── core/                   // 핵심 로직
│   │   ├── models/
│   │   │   └── welfare.js
│   │   └── utils/
│   │       └── helpers.js
│   ├── ui/                     // UI 구성
│   │   ├── components/
│   │   │   ├── search-box.js
│   │   │   └── card.js
│   │   ├── layouts/
│   │   │   └── main-layout.js
│   │   └── handlers/
│   │       ├── search-handler.js
│   │       └── detail-handler.js

├── data/                       // JSON 데이터
│   └── welfare-data.json

├── libs/                       // 외부 라이브러리
│   ├── bootstrap/
│   │   ├── css/bootstrap.min.css
│   │   └── js/bootstrap.bundle.min.js
│   └── jquery/jquery-3.7.0.min.js

├── tests/                      // 테스트 코드 (선택사항)
│   ├── core/
│   └── ui/

└── README.md
