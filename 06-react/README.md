# React + TanStack Query

### 기술 스택

- React + Vite : 컴포넌트 기반 UI 라이브러리 + 빠른 개발 서버
- react-router-dom : URL 기반 클라이언트 라우팅
- TanStack Query : 서버 상태 관리 (조회, 캐싱, 재요청, 로딩 상태)
- axios : HTTP 클라이언트, 인터셉터로 토큰 자동 첨부
- Tailwind CSS : 유틸리티 클래스 기반 CSS 프레임워크
- sonner : 토스트 알림 라이브러리
- Leaflet + react-leaflet : 지도/마커 렌더링 (API 키 불필요)

### 실행

```bash
# 05-express 서버를 먼저 실행시켜놓는 걸 추천
cd 06-react
npm i
npm run dev
```

### 전체 구조

- index.html
- src
  - main.jsx : 앱이 시작되는 파일
  - router.jsx : 주소(URL)마다 어떤 화면을 보여줄지 정리
  - **pages** : 화면 하나당 파일 하나
  - **components** : 여러 화면에서 재사용하는 조각들
  - **api** : 서버에 요청 보내는 함수 모음
    - instance.js : 요청마다 토큰을 자동으로 붙여주는 설정
  - **hooks** : 서버 데이터를 가져오고 관리하는 함수 모음
    - useRecipes.js : 레시피 목록 + 무한 스크롤
    - useRecipe.js : 레시피 상세
    - useRecipeMutations.js : 레시피 등록/수정/삭제
    - useBars.js : 칵테일바 목록 검색
  - context/AuthContext.jsx : 로그인 상태를 앱 전체에서 같이 사용

### 페이지 목록

- `/` : 레시피 목록 (검색, 무한 스크롤, 로그인 시 등록 버튼)
- `/login` : 로그인
- `/signup` : 회원가입
- `/recipe/:id` : 레시피 상세 (본인 글이면 수정/삭제 버튼)
- `/bars` : 용산구 칵테일바 목록 - 지도(마커) + 목록, 로그인 불필요
