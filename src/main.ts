// src/main.ts
window.onload = () => {
  if (window.location.hash) {
      showTabContent(window.location.hash);
  } else {
      showTabContent('#tab1');
  }
}

window.addEventListener('hashchange', () => {
  showTabContent(window.location.hash);
});

function showTabContent(hash: string) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
  });

  const activeTabContent = document.querySelector(hash);
  if (activeTabContent) {
      activeTabContent.classList.add('active');
  }
}