var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Java Full Stack Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
    document.querySelector(".menu-toggle").classList.toggle("active");
}

document.querySelectorAll(".navbar a").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelector(".navbar").classList.remove("active");
        document.querySelector(".menu-toggle").classList.remove("active");
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  

  const serviceID = 'service_rus3ke9';    
  const templateID = 'template_hnivty7';  
  
  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      mobile: document.getElementById('mobile').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
  };

  emailjs.send(serviceID, templateID, formData)
      .then(function(response) {
          console.log('Success:', response);
          alert('Message sent successfully!');
          event.target.reset();
      }, function(error) {
          console.error('Error:', error);
          alert('Failed to send the message.');
      });
});








const revealElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.2 
    });

    revealElements.forEach(el => observer.observe(el));







    const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-mode');
  }


  const toggleBtn = document.getElementById('theme-toggle');

  toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');

    if (document.documentElement.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });


  const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});