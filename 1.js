// Include your JavaScript functions here
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-en], [data-lang-am]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
}
