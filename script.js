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

//Hire Button
document.getElementById('Hirebutton').addEventListener('click', function() {
  window.location.href = 'mailto:adhikariarpan2063@gmail.com?subject=Job%20Opportunity&body=Dear%20Arpan,%0D%0A%0D%0AWe%20are%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]';
});

document.getElementById('Hirebutton').addEventListener('touchstart', function() {
  window.location.href = 'mailto:adhikariarpan2063@gmail.com?subject=Job%20Opportunity&body=Dear%20Arpan,%0D%0A%0D%0AWe%20are%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]';
});


//Social Media Links
// Function to handle the button click
function handleSocialButtonClick(event, url) {
  event.preventDefault();
  setTimeout(() => {
    window.open(url, '_blank'); // Open the URL in a new tab
}, 100);
}

// Add event listeners for Instagram button
const instagramButton = document.getElementById('instagramButton');
instagramButton.addEventListener('click', function(event) {
  handleSocialButtonClick(event, 'https://www.instagram.com/adhikari__arpan/');
});
instagramButton.addEventListener('touchstart', function(event) {
  handleSocialButtonClick(event, 'https://www.instagram.com/adhikari__arpan/');
});

// Add event listeners for Twitter button
const twitterButton = document.getElementById('twitterButton');
twitterButton.addEventListener('click', function(event) {
  handleSocialButtonClick(event, 'https://x.com/adhikari__arpan');
});
twitterButton.addEventListener('touchstart', function(event) {
  handleSocialButtonClick(event, 'https://x.com/adhikari__arpan');
});

// Add event listeners for LinkedIn button
const linkedinButton = document.getElementById('linkedinButton');
linkedinButton.addEventListener('click', function(event) {
  handleSocialButtonClick(event, 'https://www.linkedin.com/in/adhikari-arpan63/');
});
linkedinButton.addEventListener('touchstart', function(event) {
  handleSocialButtonClick(event, 'https://www.linkedin.com/in/adhikari-arpan63/');
});

// Add event listeners for GitHub button
const githubButton = document.getElementById('githubButton');
githubButton.addEventListener('click', function(event) {
  handleSocialButtonClick(event, 'https://github.com/adhikari-arpan');
});
githubButton.addEventListener('touchstart', function(event) {
  handleSocialButtonClick(event, 'https://github.com/adhikari-arpan');
});

// Back to top button
document.addEventListener("DOMContentLoaded", function() {
      const topBtn = document.getElementById("TopBtn");

      window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { // Show button after scrolling 300px
          topBtn.style.display = "flex";
        } else {
          topBtn.style.display = "none";
        }
      });

      topBtn.addEventListener("click", function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });

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

//Fade in animation to sections
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        if (section.offsetTop - window.innerHeight / 2 < window.scrollY) {
            section.classList.add('reveal');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
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
  