// Ensure EmailJS library is loaded before initialization
document.addEventListener("DOMContentLoaded", () => {
// Initialize EmailJS
emailjs.init("dsH9yyZc0oqqe8fsx"); // Replace with your EmailJS Public Key

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("eVFk0sipIeIH3zSNnJdiv", "template_klntj5v", {
    email: email,
    message: message,
  })
  .then(() => {
    alert("Thank you! Your message has been sent successfully.");
    // Reset the form
    this.reset();
  })
  .catch((error) => {
    console.error("Error sending email:", error);
    alert("Oops! Something went wrong. Please try again later.");
  });
}); 