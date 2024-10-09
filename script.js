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

//Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(this);

        fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thank you for contacting me! I will reach back to you soon.');
                this.reset(); // Reset the form after successful submission
            } else {
                alert('There was a problem submitting your info.');
            }
        }).catch(error => {
            alert('There was a problem submitting your info.');
        });
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

//Nav Bar for Mobile Screen
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
  
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  });
  