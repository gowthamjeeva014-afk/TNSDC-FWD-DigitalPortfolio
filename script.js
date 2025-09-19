// Contact Form Submit Handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("msg").textContent = "Thank you! Your message has been sent 💌";

  // Reset form
  this.reset();
});