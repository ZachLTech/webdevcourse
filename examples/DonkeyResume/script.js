document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
  
    function checkScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check on page load
  });
  