"use strict";

// src/main.ts
window.onload = function () {
  if (window.location.hash) {
    showTabContent(window.location.hash);
  } else {
    showTabContent('#tab1');
  }
};
window.addEventListener('hashchange', function () {
  showTabContent(window.location.hash);
});
function showTabContent(hash) {
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function (tabContent) {
    tabContent.classList.remove('active');
  });
  var activeTabContent = document.querySelector(hash);
  if (activeTabContent) {
    activeTabContent.classList.add('active');
  }
}
