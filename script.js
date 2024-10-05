//Texts in Home page
const texts = [
    "Computer Engineering Student",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Tech Enthusiast",
    "AI Enthusiast"
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('text').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); 
    } else {
        setTimeout(type, 100);
    }
})();  

// Download CV button
document.getElementById('download-cv').addEventListener('click', function() {
    document.getElementById('pdfLink').click();
});

//Hire Me Button
// function scrollToContact() {
//     document.getElementById('contact-me').scrollIntoView({ behavior: 'smooth' });
//   }  

// Back to top button
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo(0, 0);
});

// Fade in animation to sections
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        if (section.offsetTop - window.innerHeight / 2 < window.scrollY) {
            section.classList.add('reveal');
        }
    });
});
