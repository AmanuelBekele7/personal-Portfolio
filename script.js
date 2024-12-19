

      document.querySelector('a[href="#home"]').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default behavior
      const aboutSection = document.querySelector('#home');
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
});
        
      document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default behavior
      const aboutSection = document.querySelector('#about');
      aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
});
    document.querySelector('a[href="#services"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    const servicesSection = document.querySelector('#services');
    servicesSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
});

document.querySelector('a[href="#portfolio"]').addEventListener('click', function(event) {
    event.preventDefault();
    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }
  
  alert("Message sent! Thank you for reaching out.");
  
  this.reset(); // Clear form fields
});


   