// Ensure EmailJS library is loaded before initialization
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS with your public key 

 emailjs.init("dsH9yyZc0oqqe8fsx"); // Replace with your EmailJS Public Key

  // Add event listener to the form
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Debugging: Ensure values are captured
    console.log("Email:", email);
    console.log("Message:", message);

    // Send email using EmailJS
    emailjs
      .send("service_6pkhaul", "template_klntj5v", {
        email: email, // Matches template field
        message: message, // Matches template field
      })
      .then(() => {
        alert("Thank you! Your message has been sent successfully.");
        form.reset(); // Reset form on success
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  });
});   