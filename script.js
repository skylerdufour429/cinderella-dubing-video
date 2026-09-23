const languageCount = document.querySelector('#lang-count');
const languageItems = document.querySelectorAll('.download-item');

if (languageCount && languageItems.length) {
  languageCount.textContent = `${languageItems.length} languages`;
}
