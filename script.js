document.addEventListener("DOMContentLoaded", () => {
    const translations = {

        fr: {
            "welcome-title": "Bienvenue sur Pro IN Deutsch",
            "welcome-text": "Découvrez nos cours de langue allemande adaptés à tous les niveaux, de débutant à avancé.",
            "payment-title": "Options de paiement",
            "payment-text": "Choisissez votre niveau et commencez dès aujourd'hui :",
            "contact-title": "Contactez-nous",
            "contact-text": "Envoyez-nous vos informations si vous êtes intéressé(e) :",
            "about-title": "Pourquoi choisir Pro IN Deutsch ?",
            "about-text": "Nous sommes spécialisés dans l'enseignement de l'allemand avec des professeurs certifiés.",
            "site-title": "Pro IN Deutsch" ,
            "nav-home": "Accueil",
            "nav-payment": "Paiement",
            "nav-contact": "Contact",
            "nav-about": "Pourquoi nous?",
            "footer-copyright": "© 2024 Pro IN Deutsch - Tous droits réservés.",
            "footer-follow": "Suivez-nous sur :",
            "info": "Contactez-nous : email@example.com | Téléphone : 0123456789",
            "nom": "Nom : ",
            "email": "Email : ",
            "sms": "Message : ",
            "envoyer": " Envoyer "

        },
        en: {
            "welcome-title": "Welcome to Pro IN Deutsch",
            "welcome-text": "Discover our German language courses tailored for all levels, from beginner to advanced.",
            "payment-title": "Payment Options",
            "payment-text": "Choose your level and start today:",
            "contact-title": "Contact Us",
            "contact-text": "Send us your details if you're interested:",
            "about-title": "Why choose Pro IN Deutsch?",
            "about-text": "We specialize in teaching German with certified teachers.",
            "site-title": "Pro IN Deutsch",
            "nav-home": "Home",
            "nav-payment": "Payment",
            "nav-contact": "Contact",
            "nav-about": "Why us?",
            "footer-copyright": "© 2024 Pro IN Deutsch - All rights reserved.",
            "footer-follow": "Follow us on:",
             "info": "Contact us: email@example.com | Phone: 0123456789",
             "nom": "Name : ",
            "email": "Email : ",
            "sms":  "Text : ",
            "envoyer": "  Send  "
        },
        de: {
            "welcome-title": "Willkommen bei Pro IN Deutsch",
            "welcome-text": "Entdecken Sie unsere Deutschkurse für alle Niveaus, von Anfänger bis Fortgeschrittene.",
            "payment-title": "Zahlungsoptionen",
            "payment-text": "Wählen Sie Ihr Niveau und beginnen Sie noch heute:",
            "contact-title": "Kontaktieren Sie uns",
            "contact-text": "Senden Sie uns Ihre Informationen, wenn Sie interessiert sind:",
            "about-title": "Warum Pro IN Deutsch wählen?",
            "about-text": "Wir sind spezialisiert auf das Unterrichten von Deutsch mit zertifizierten Lehrern.",
            "site-title": "Pro IN Deutsch",
            "nav-home": "Startseite",
            "nav-payment": "Bezahlung",
            "nav-contact": "Kontakt",
            "nav-about": "Warum wir?",
            "footer-copyright": "© 2024 Pro IN Deutsch - Alle Rechte vorbehalten.",
            "footer-follow": "Folgen Sie uns auf:",
             "info": "Kontaktieren Sie uns: email@example.com | Telefon: 0123456789",
             "nom": "Name : ",
            "email": "Email : ",
            "sms": "Nachricht : ",
            "envoyer": " Senden "
        }
    };

    document.getElementById("language-selector").addEventListener("change", (event) => {
        const lang = event.target.value;
        for (const [key, translation] of Object.entries(translations[lang])) {
            const element = document.getElementById(key);
            if (element) element.textContent = translation;
        }
    });

    
});
