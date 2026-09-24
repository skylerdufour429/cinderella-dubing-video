const languages = [
  { label: 'Albanian', slug: 'albanian' },
  { label: 'Arabic', slug: 'arabic' },
  { label: 'Bengali', slug: 'bengali' },
  { label: 'Bulgarian', slug: 'bulgarian' },
  { label: 'Cantonese', slug: 'cantonese' },
  { label: 'Croatian', slug: 'croatian' },
  { label: 'Czech', slug: 'czech' },
  { label: 'Danish', slug: 'danish' },
  { label: 'Dutch', slug: 'dutch' },
  { label: 'Finnish', slug: 'finnish' },
  { label: 'French', slug: 'french' },
  { label: 'German', slug: 'german' },
  { label: 'Greek', slug: 'greek' },
  { label: 'Hebrew', slug: 'hebrew' },
  { label: 'Hindi', slug: 'hindi' },
  { label: 'Hmong', slug: 'hmong' },
  { label: 'Hungarian', slug: 'hungarian' },
  { label: 'Icelandic', slug: 'icelandic' },
  { label: 'Indonesian', slug: 'indonesian' },
  { label: 'Italian', slug: 'italian' },
  { label: 'Japanese', slug: 'japanese' },
  { label: 'Kazakh', slug: 'kazakh' },
  { label: 'Khmer', slug: 'khmer' },
  { label: 'Korean', slug: 'korean' },
  { label: 'Kurdish', slug: 'kurdish' },
  { label: 'Malay', slug: 'malay' },
  { label: 'Mandarin Chinese', slug: 'mandarin-chinese' },
  { label: 'Mizo', slug: 'mizo' },
  { label: 'Norwegian', slug: 'norwegian' },
  { label: 'Persian', slug: 'persian' },
  { label: 'Polish', slug: 'polish' },
  { label: 'Portuguese', slug: 'portuguese' },
  { label: 'Romanian', slug: 'romanian' },
  { label: 'Russian', slug: 'russian' },
  { label: 'Serbian', slug: 'serbian' },
  { label: 'Slovak', slug: 'slovak' },
  { label: 'Spanish', slug: 'spanish' },
  { label: 'Swedish', slug: 'swedish' },
  { label: 'Tamil', slug: 'tamil' },
  { label: 'Teochew', slug: 'teochew' },
  { label: 'Thai', slug: 'thai' },
  { label: 'Turkish', slug: 'turkish' },
  { label: 'Ukrainian', slug: 'ukrainian' },
  { label: 'Uyghur', slug: 'uyghur' },
  { label: 'Vietnamese', slug: 'vietnamese' }
];

const list = document.getElementById('languageList');
const filterField = document.getElementById('languageFilter');
const languageCount = document.getElementById('languageCount');

function buildLanguageCards() {
  list.innerHTML = languages
    .map(
      ({ label, slug }) => `
        <article class="language-card" data-language="${slug}">
          <h2>${label}</h2>
          <div class="card-actions">
            <a class="action-link primary" href="https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-${slug}.mp4" target="_blank" rel="noreferrer">Play</a>
            <a class="action-link secondary" href="https://skylerdufour429.github.io/cinderella-dub-collection/media/cinderella-1950-${slug}.mp4" download>Download</a>
          </div>
        </article>
      `
    )
    .join('');

  updateCount();
}

function updateCount() {
  const visibleCards = [...document.querySelectorAll('.language-card')].filter(
    (card) => !card.classList.contains('hidden')
  );

  languageCount.textContent = visibleCards.length;
}

function applyFilter() {
  const query = filterField.value.trim().toLowerCase();

  [...document.querySelectorAll('.language-card')].forEach((card) => {
    const label = card.querySelector('h2').textContent.toLowerCase();
    const matches = !query || label.includes(query);

    card.classList.toggle('hidden', !matches);
  });

  updateCount();
}

filterField.addEventListener('input', applyFilter);

buildLanguageCards();
