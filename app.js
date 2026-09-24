const baseUrl = "https://skylerdufour429.github.io/cinderella-dub-collection/media/";

const languages = [
  { name: "Albanian", code: "albanian", filename: "cinderella-1950-albanian.mp4" },
  { name: "Arabic", code: "arabic", filename: "cinderella-1950-arabic.mp4" },
  { name: "Bengali", code: "bengali", filename: "cinderella-1950-bengali.mp4" },
  { name: "Bulgarian", code: "bulgarian", filename: "cinderella-1950-bulgarian.mp4" },
  { name: "Cantonese", code: "cantonese", filename: "cinderella-1950-cantonese.mp4" },
  { name: "Croatian", code: "croatian", filename: "cinderella-1950-croatian.mp4" },
  { name: "Czech", code: "czech", filename: "cinderella-1950-czech.mp4" },
  { name: "Danish", code: "danish", filename: "cinderella-1950-danish.mp4" },
  { name: "Dutch", code: "dutch", filename: "cinderella-1950-dutch.mp4" },
  { name: "Finnish", code: "finnish", filename: "cinderella-1950-finnish.mp4" },
  { name: "French", code: "french", filename: "cinderella-1950-french.mp4" },
  { name: "German", code: "german", filename: "cinderella-1950-german.mp4" },
  { name: "Greek", code: "greek", filename: "cinderella-1950-greek.mp4" },
  { name: "Hebrew", code: "hebrew", filename: "cinderella-1950-hebrew.mp4" },
  { name: "Hindi", code: "hindi", filename: "cinderella-1950-hindi.mp4" },
  { name: "Hmong", code: "hmong", filename: "cinderella-1950-hmong.mp4" },
  { name: "Hungarian", code: "hungarian", filename: "cinderella-1950-hungarian.mp4" },
  { name: "Icelandic", code: "icelandic", filename: "cinderella-1950-icelandic.mp4" },
  { name: "Indonesian", code: "indonesian", filename: "cinderella-1950-indonesian.mp4" },
  { name: "Italian", code: "italian", filename: "cinderella-1950-italian.mp4" },
  { name: "Japanese", code: "japanese", filename: "cinderella-1950-japanese.mp4" },
  { name: "Kazakh", code: "kazakh", filename: "cinderella-1950-kazakh.mp4" },
  { name: "Khmer", code: "khmer", filename: "cinderella-1950-khmer.mp4" },
  { name: "Korean", code: "korean", filename: "cinderella-1950-korean.mp4" },
  { name: "Kurdish", code: "kurdish", filename: "cinderella-1950-kurdish.mp4" },
  { name: "Malay", code: "malay", filename: "cinderella-1950-malay.mp4" },
  { name: "Mandarin Chinese", code: "mandarin-chinese", filename: "cinderella-1950-mandarin-chinese.mp4" },
  { name: "Mizo", code: "mizo", filename: "cinderella-1950-mizo.mp4" },
  { name: "Norwegian", code: "norwegian", filename: "cinderella-1950-norwegian.mp4" },
  { name: "Persian", code: "persian", filename: "cinderella-1950-persian.mp4" },
  { name: "Polish", code: "polish", filename: "cinderella-1950-polish.mp4" },
  { name: "Portuguese", code: "portuguese", filename: "cinderella-1950-portuguese.mp4" },
  { name: "Romanian", code: "romanian", filename: "cinderella-1950-romanian.mp4" },
  { name: "Russian", code: "russian", filename: "cinderella-1950-russian.mp4" },
  { name: "Serbian", code: "serbian", filename: "cinderella-1950-serbian.mp4" },
  { name: "Slovak", code: "slovak", filename: "cinderella-1950-slovak.mp4" },
  { name: "Spanish", code: "spanish", filename: "cinderella-1950-spanish.mp4" },
  { name: "Swedish", code: "swedish", filename: "cinderella-1950-swedish.mp4" },
  { name: "Tamil", code: "tamil", filename: "cinderella-1950-tamil.mp4" },
  { name: "Teochew", code: "teochew", filename: "cinderella-1950-teochew.mp4" },
  { name: "Thai", code: "thai", filename: "cinderella-1950-thai.mp4" },
  { name: "Turkish", code: "turkish", filename: "cinderella-1950-turkish.mp4" },
  { name: "Ukrainian", code: "ukrainian", filename: "cinderella-1950-ukrainian.mp4" },
  { name: "Uyghur", code: "uyghur", filename: "cinderella-1950-uyghur.mp4" },
  { name: "Vietnamese", code: "vietnamese", filename: "cinderella-1950-vietnamese.mp4" },
];

const state = {
  activeLanguageCode: languages[0].code,
};

const languageList = document.getElementById("languageList");
const languageCount = document.getElementById("languageCount");
const languageSearch = document.getElementById("languageSearch");
const selectedLanguageName = document.getElementById("selectedLanguageName");
const videoPlayer = document.getElementById("videoPlayer");
const openLink = document.getElementById("openLink");
const downloadLink = document.getElementById("downloadLink");

function getLanguageByCode(code) {
  return languages.find((language) => language.code === code) || languages[0];
}

function setActiveLanguage(code) {
  const language = getLanguageByCode(code);
  state.activeLanguageCode = language.code;

  selectedLanguageName.textContent = language.name;
  const sourceUrl = `${baseUrl}${language.filename}`;

  videoPlayer.src = sourceUrl;
  videoPlayer.load();

  openLink.href = sourceUrl;
  downloadLink.href = sourceUrl;
  downloadLink.setAttribute("download", language.filename);

  Array.from(languageList.querySelectorAll(".lang-item")).forEach((button) => {
    const isActive = button.dataset.language === language.code;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderLanguages(searchTerm = "") {
  const sanitizedTerm = searchTerm.trim().toLowerCase();
  const filteredLanguages = languages.filter((language) => {
    const matchesName = language.name.toLowerCase().includes(sanitizedTerm);
    const matchesCode = language.code.toLowerCase().includes(sanitizedTerm);
    return matchesName || matchesCode;
  });

  languageCount.textContent = String(filteredLanguages.length);

  if (!filteredLanguages.length) {
    languageList.innerHTML = '<div class="empty-state">No matching languages found.</div>';
    return;
  }

  languageList.innerHTML = filteredLanguages
    .map(
      (language) => `
        <button
          type="button"
          class="lang-item ${language.code === state.activeLanguageCode ? "active" : ""}"
          data-language="${language.code}"
          aria-pressed="${language.code === state.activeLanguageCode}"
        >
          ${language.name}
        </button>
      `,
    )
    .join("");

  languageList.querySelectorAll(".lang-item").forEach((button) => {
    button.addEventListener("click", () => setActiveLanguage(button.dataset.language));
  });
}

languageSearch.addEventListener("input", (event) => {
  renderLanguages(event.target.value);
});

renderLanguages();
setActiveLanguage(state.activeLanguageCode);
