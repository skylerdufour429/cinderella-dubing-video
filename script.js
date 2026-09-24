const languages = [
  { name: 'Albanian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-albanian.mp4' },
  { name: 'Arabic', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-arabic.mp4' },
  { name: 'Bengali', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-bengali.mp4' },
  { name: 'Bulgarian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-bulgarian.mp4' },
  { name: 'Cantonese', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-cantonese.mp4' },
  { name: 'Croatian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-croatian.mp4' },
  { name: 'Czech', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-czech.mp4' },
  { name: 'Danish', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-danish.mp4' },
  { name: 'Dutch', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-dutch.mp4' },
  { name: 'Finnish', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-finnish.mp4' },
  { name: 'French', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-french.mp4' },
  { name: 'German', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-german.mp4' },
  { name: 'Greek', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-greek.mp4' },
  { name: 'Hebrew', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-hebrew.mp4' },
  { name: 'Hindi', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-hindi.mp4' },
  { name: 'Hmong', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-hmong.mp4' },
  { name: 'Hungarian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-hungarian.mp4' },
  { name: 'Icelandic', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-icelandic.mp4' },
  { name: 'Indonesian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-indonesian.mp4' },
  { name: 'Italian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-italian.mp4' },
  { name: 'Japanese', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-japanese.mp4' },
  { name: 'Kazakh', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-kazakh.mp4' },
  { name: 'Khmer', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-khmer.mp4' },
  { name: 'Korean', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-korean.mp4' },
  { name: 'Kurdish', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-kurdish.mp4' },
  { name: 'Malay', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-malay.mp4' },
  { name: 'Mandarin Chinese', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-mandarin-chinese.mp4' },
  { name: 'Mizo', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-mizo.mp4' },
  { name: 'Norwegian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-norwegian.mp4' },
  { name: 'Persian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-persian.mp4' },
  { name: 'Polish', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-polish.mp4' },
  { name: 'Portuguese', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-portuguese.mp4' },
  { name: 'Romanian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-romanian.mp4' },
  { name: 'Russian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-russian.mp4' },
  { name: 'Serbian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-serbian.mp4' },
  { name: 'Slovak', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-slovak.mp4' },
  { name: 'Spanish', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-spanish.mp4' },
  { name: 'Swedish', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-swedish.mp4' },
  { name: 'Tamil', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-tamil.mp4' },
  { name: 'Teochew', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-teochew.mp4' },
  { name: 'Thai', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-thai.mp4' },
  { name: 'Turkish', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-turkish.mp4' },
  { name: 'Ukrainian', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-ukrainian.mp4' },
  { name: 'Uyghur', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-uyghur.mp4' },
  { name: 'Vietnamese', url: 'https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-vietnamese.mp4' }
];

const languageList = document.getElementById('languageList');
const searchInput = document.getElementById('languageSearch');

function renderLanguages(query = '') {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredLanguages = languages.filter(({ name }) =>
    name.toLowerCase().includes(normalizedQuery)
  );

  if (!filteredLanguages.length) {
    languageList.innerHTML = '<div class="empty-state">No matching languages found.</div>';
    return;
  }

  languageList.innerHTML = filteredLanguages
    .map(
      ({ name, url }) => `
        <article class="language-card">
          <div class="language-name">${name}</div>
          <div class="language-actions">
            <a class="action-button primary" href="${url}" target="_blank" rel="noreferrer">Play</a>
            <a class="action-button secondary" href="${url}" download>Download</a>
          </div>
        </article>
      `
    )
    .join('');
}

searchInput.addEventListener('input', (event) => {
  renderLanguages(event.target.value);
});

renderLanguages();
