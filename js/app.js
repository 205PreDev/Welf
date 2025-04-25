// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 페이지에 다국어 적용
    const userLanguage = navigator.language || 'ko'; // 기본 언어는 한국어
    loadLanguage(userLanguage); // 언어 로딩
  
    // 다른 초기화 코드가 필요하면 여기에 추가
  });
  
  // 다국어 JSON 파일 로드 함수
  function loadLanguage(language) {
    const languageFile = `./locales/${language}.json`; // locales 폴더에 다국어 파일 위치
    fetch(languageFile)
      .then(response => response.json())
      .then(translations => {
        // 페이지에 있는 모든 data-i18n 속성에 맞는 텍스트 업데이트
        document.querySelectorAll('[data-i18n]').forEach((element) => {
          const key = element.getAttribute('data-i18n');
          if (translations[key]) {
            element.textContent = translations[key];
          }
        });
      })
      .catch(() => {
        console.warn('언어 파일을 불러오는 데 실패했습니다. 기본 언어인 한국어로 설정됩니다.');
        loadLanguage('ko'); // 한국어 기본값으로 로딩
      });
  }
  
  // 페이지 이동 (간단한 라우팅 처리 예시)
  function navigateTo(page) {
    window.location.href = page;
  }
  
  // 회원가입과 로그인 처리
  function registerUser(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }
  
    const userData = { username, email, password };
    console.log('회원가입 정보:', userData);
  
    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
    navigateTo('Signin.html'); // 회원가입 후 로그인 페이지로 이동
  }
  
  function loginUser(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('rememberMe').checked;
  
    console.log('로그인 요청:', { email, password, remember });
  
    alert('로그인 성공! 메인 페이지로 이동합니다.');
    navigateTo('index.html'); // 로그인 후 메인 페이지로 이동
  }
  
  // 소셜 로그인 (간단한 예시)
  function socialLogin(provider) {
    alert(`${provider} 로그인 페이지로 이동합니다.`);
    // 실제로는 각 소셜 로그인 API 연동이 필요함
  }
  