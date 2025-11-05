// 모바일 내비 토글
const navToggleButton = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggleButton && siteNav) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const targetEl = targetId ? document.querySelector(targetId) : null;
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      siteNav?.classList.remove('open');
      navToggleButton?.setAttribute('aria-expanded', 'false');
    }
  });
});

// 연락처 폼(데모 동작)
const form = document.getElementById('contactForm');
const statusEl = document.querySelector('.form-status');
if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = '현재 문의 기능은 보류 중입니다.';
    statusEl.style.color = '#a3a7b7';
  });
}

// 푸터 연도
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

// 공지사항 데이터 및 렌더링
const noticesData = [
  {
    date: '2025.11.1',
    title: '주식회사 스우 홈페이지 오픈',
    content: '주식회사 스우(SWOO) 공식 홈페이지가 오픈되었습니다. 앞으로도 많은 관심과 지지 부탁드립니다.'
  },
  {
    date: '2025.11.3',
    title: '신규 프로젝트 문의 안내',
    content: '2025년 신규 프로젝트 문의를 받고 있습니다. 웹사이트 제작, UI/UX 개선, 브랜딩 서비스에 관심이 있으시면 언제든지 연락주세요.'
  }
  // 공지사항을 추가하려면 여기에 객체를 추가하세요
];

function formatDate(dateString) {
  return dateString;
}

function renderNotices() {
  const noticesList = document.getElementById('noticesList');
  if (!noticesList) return;

  if (noticesData.length === 0) {
    noticesList.innerHTML = '<div class="notice-empty">등록된 공지사항이 없습니다.</div>';
    return;
  }

  noticesList.innerHTML = noticesData.map((notice, index) => `
    <article class="notice-item" data-index="${index}">
      <div class="notice-header">
        <h3 class="notice-title">${notice.title}</h3>
        <time class="notice-date">${formatDate(notice.date)}</time>
      </div>
      <div class="notice-content">${notice.content}</div>
    </article>
  `).join('');

  // 공지사항 클릭 시 확장/축소
  noticesList.querySelectorAll('.notice-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
  });
}

// 페이지 로드 시 공지사항 렌더링
document.addEventListener('DOMContentLoaded', () => {
  renderNotices();
});


