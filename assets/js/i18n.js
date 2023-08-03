// The active locale

const locale = window.navigator.userLanguage || window.navigator.language;

// We can have as many locales here as we want,
// and use any locales we want. We have English
// and Arabic as locales here as examples.

const translations = {

    // English translations

    "en": {
    "remove": "remove",
    "cancel": "cancel",
    "save": "save",
    "uploading": "Uploading",
    },

    // German translations

    "de": {
    "remove": "löschen",
    "cancel": "abrechen",
    "save": "speichen",
    "uploading": "Wird hochgeladen",
    },

    // Portuguese translations

    "pt": {
    "remove": "remover",
    "cancel": "cancelar",
    "save": "gravar",
    "uploading": "Enviando",
    },
};

// When the page content is ready...

document.addEventListener("DOMContentLoaded", () => {
    // Find all elements that have the key attribute
    document
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);

});

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const resolvedLocale = translations.hasOwnProperty(locale) ? locale : locale.substring(0, locale.indexOf("-"));

  if (translations.hasOwnProperty(resolvedLocale)) {
    const translation = translations[resolvedLocale][key];

    element.innerText = translation;
  }
}
