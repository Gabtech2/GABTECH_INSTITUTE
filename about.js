// Function to observe elements and trigger animations
const observeElements = () => {
  const elementsToAnimate = document.querySelectorAll(".about h2, .about h3, .about p, .about ul, .about ol, .testimonial");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target); // Stop observing once animation starts
      }
    });
  }, { threshold: 0.1 });

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
};

// Initialize observer when DOM is ready
document.addEventListener("DOMContentLoaded", observeElements);