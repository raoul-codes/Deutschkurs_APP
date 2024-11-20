document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            welcome: "Welcome to our site",
            faq_title: "FAQ",
        },
        fr: {
            welcome: "Bienvenue sur notre site",
            faq_title: "FAQ",
        },
        de: {
            welcome: "Willkommen auf unserer Website",
            faq_title: "FAQ",
        }
    };

    const languageSelector = document.createElement("select");
    languageSelector.innerHTML = `
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
    `;
    document.body.prepend(languageSelector);

    function updateLanguage(lang) {
        document.querySelector("h1").textContent = translations[lang].welcome;
        document.querySelector("#faq h2").textContent = translations[lang].faq_title;
    }

    languageSelector.addEventListener("change", (e) => {
        updateLanguage(e.target.value);
    });

    updateLanguage("fr");
});
