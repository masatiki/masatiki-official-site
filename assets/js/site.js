const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const LANGUAGE_PREFERENCE_KEY = "masatiki-site-language";
const JAPANESE_LANGUAGE = "ja";
const ENGLISH_LANGUAGE = "en-US";

const normalizeSiteLanguage = (language) => {
  if (typeof language !== "string") {
    return null;
  }

  return language.toLowerCase().startsWith("ja")
    ? JAPANESE_LANGUAGE
    : ENGLISH_LANGUAGE;
};

const readLanguagePreference = () => {
  try {
    const language = window.localStorage.getItem(LANGUAGE_PREFERENCE_KEY);

    if (language === JAPANESE_LANGUAGE || language === ENGLISH_LANGUAGE) {
      return language;
    }
  } catch {
    // Continue with the browser language when storage is unavailable.
  }

  return null;
};

const saveLanguagePreference = (language) => {
  try {
    window.localStorage.setItem(LANGUAGE_PREFERENCE_KEY, language);
  } catch {
    // The link still works when storage is unavailable.
  }
};

const languageSwitchLinks = document.querySelectorAll(
  'a[lang="ja"], a[lang="en-US"]'
);

languageSwitchLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const selectedLanguage = normalizeSiteLanguage(link.getAttribute("lang"));

    if (selectedLanguage) {
      saveLanguagePreference(selectedLanguage);
    }
  });
});

const currentLanguage = normalizeSiteLanguage(
  document.documentElement.getAttribute("lang")
);
const savedLanguage = readLanguagePreference();
const browserLanguage =
  navigator.languages?.find((language) => typeof language === "string") ??
  navigator.language;
const preferredLanguage =
  savedLanguage ?? normalizeSiteLanguage(browserLanguage);

if (currentLanguage && preferredLanguage && currentLanguage !== preferredLanguage) {
  const alternatePage = document.querySelector(
    `link[rel="alternate"][hreflang="${preferredLanguage}"]`
  );

  if (alternatePage?.href) {
    window.location.replace(alternatePage.href);
  }
}
