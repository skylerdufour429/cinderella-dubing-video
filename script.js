const languages = [
  ["Albanian", "cinderella-1950-albanian.mp4"],
  ["Arabic", "cinderella-1950-arabic.mp4"],
  ["Bengali", "cinderella-1950-bengali.mp4"],
  ["Bulgarian", "cinderella-1950-bulgarian.mp4"],
  ["Cantonese", "cinderella-1950-cantonese.mp4"],
  ["Croatian", "cinderella-1950-croatian.mp4"],
  ["Czech", "cinderella-1950-czech.mp4"],
  ["Danish", "cinderella-1950-danish.mp4"],
  ["Dutch", "cinderella-1950-dutch.mp4"],
  ["Finnish", "cinderella-1950-finnish.mp4"],
  ["French", "cinderella-1950-french.mp4"],
  ["German", "cinderella-1950-german.mp4"],
  ["Greek", "cinderella-1950-greek.mp4"],
  ["Hebrew", "cinderella-1950-hebrew.mp4"],
  ["Hindi", "cinderella-1950-hindi.mp4"],
  ["Hmong", "cinderella-1950-hmong.mp4"],
  ["Hungarian", "cinderella-1950-hungarian.mp4"],
  ["Icelandic", "cinderella-1950-icelandic.mp4"],
  ["Indonesian", "cinderella-1950-indonesian.mp4"],
  ["Italian", "cinderella-1950-italian.mp4"],
  ["Japanese", "cinderella-1950-japanese.mp4"],
  ["Kazakh", "cinderella-1950-kazakh.mp4"],
  ["Khmer", "cinderella-1950-khmer.mp4"],
  ["Korean", "cinderella-1950-korean.mp4"],
  ["Kurdish", "cinderella-1950-kurdish.mp4"],
  ["Malay", "cinderella-1950-malay.mp4"],
  ["Mandarin Chinese", "cinderella-1950-mandarin-chinese.mp4"],
  ["Mizo", "cinderella-1950-mizo.mp4"],
  ["Norwegian", "cinderella-1950-norwegian.mp4"],
  ["Persian", "cinderella-1950-persian.mp4"],
  ["Polish", "cinderella-1950-polish.mp4"],
  ["Portuguese", "cinderella-1950-portuguese.mp4"],
  ["Romanian", "cinderella-1950-romanian.mp4"],
  ["Russian", "cinderella-1950-russian.mp4"],
  ["Serbian", "cinderella-1950-serbian.mp4"],
  ["Slovak", "cinderella-1950-slovak.mp4"],
  ["Spanish", "cinderella-1950-spanish.mp4"],
  ["Swedish", "cinderella-1950-swedish.mp4"],
  ["Tamil", "cinderella-1950-tamil.mp4"],
  ["Teochew", "cinderella-1950-teochew.mp4"],
  ["Thai", "cinderella-1950-thai.mp4"],
  ["Turkish", "cinderella-1950-turkish.mp4"],
  ["Ukrainian", "cinderella-1950-ukrainian.mp4"],
  ["Uyghur", "cinderella-1950-uyghur.mp4"],
  ["Vietnamese", "cinderella-1950-vietnamese.mp4"]
];

const BASE_URL =
  "https://skylerdufour429.github.io/cinderella-dub-collection/media/";

const videoPlayer = document.getElementById("videoPlayer");
const playerTitle = document.getElementById("playerTitle");
const downloadCurrent = document.getElementById("downloadCurrent");

const languageGrid = document.getElementById("languageGrid");
const languageCount = document.getElementById("languageCount");
const searchInput = document.getElementById("searchInput");
const languageFilter = document.getElementById("languageFilter");
const noResults = document.getElementById("noResults");

/* Populate language selector */

languages.forEach(([language]) => {
  const option = document.createElement("option");

  option.value = language;
  option.textContent = language;

  languageFilter.appendChild(option);
});

/* Render cards */

function renderLanguages() {
  const searchTerm = searchInput.value
    .trim()
    .toLowerCase();

  const selectedLanguage = languageFilter.value;

  const filtered = languages.filter(([language]) => {
    const matchesSearch =
      language.toLowerCase().includes(searchTerm);

    const matchesFilter =
      selectedLanguage === "all" ||
      language === selectedLanguage;

    return matchesSearch && matchesFilter;
  });

  languageGrid.innerHTML = "";

  languageCount.textContent =
    `${filtered.length} of ${languages.length} languages`;

  noResults.hidden = filtered.length !== 0;

  filtered.forEach(([language, filename]) => {
    const url = BASE_URL + filename;

    const card = document.createElement("article");

    card.className = "language-card";

    card.innerHTML = `
      <h3 class="language-name">${language}</h3>

      <div class="card-actions">
        <button
          class="card-button"
          type="button"
          data-language="${language}"
          data-url="${url}"
        >
          Play
        </button>

        <a
          class="card-button download"
          href="${url}"
          download
        >
          Download
        </a>
      </div>
    `;

    languageGrid.appendChild(card);
  });
}

/* Play selected dub */

languageGrid.addEventListener("click", event => {
  const button = event.target.closest(
    "button[data-url]"
  );

  if (!button) {
    return;
  }

  const language = button.dataset.language;
  const url = button.dataset.url;

  videoPlayer.src = url;
  videoPlayer.load();
  videoPlayer.play().catch(() => {});

  playerTitle.textContent =
    `Cinderella (1950) — ${language}`;

  downloadCurrent.href = url;
  downloadCurrent.download = url.split("/").pop();

  downloadCurrent.classList.remove("disabled");
  downloadCurrent.setAttribute(
    "aria-disabled",
    "false"
  );

  document
    .querySelector(".player-section")
    .scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
});

/* Search/filter */

searchInput.addEventListener(
  "input",
  renderLanguages
);

languageFilter.addEventListener(
  "change",
  renderLanguages
);

/* Initial render */

renderLanguages();
