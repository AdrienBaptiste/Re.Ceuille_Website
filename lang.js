const langCheckbox = document.querySelector('.lang-checkbox');
const textFr = document.querySelectorAll('.txt-FR');
const textEn = document.querySelectorAll('.txt-EN');

langCheckbox.addEventListener('change', function () {
    if (langCheckbox.checked) {
        textFr.forEach(function (textFr) {
            textFr.style.display = 'none';
        });
        textEn.forEach(function (textEn) {
            textEn.style.display = 'block';
        });
    } else {
        textEn.forEach(function (textEn) {
            textEn.style.display = 'none';
        });
        textFr.forEach(function (textFr) {
            textFr.style.display = 'block';
        });
    }
});