// app.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Toggle visibility of a message
  const toggleBtn = document.getElementById("toggleBtn");
  const message = document.getElementById("message");

  toggleBtn.addEventListener("click", () => {
    if (message.style.display === "none") {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  });

  // Form submission to update content
  const form = document.getElementById("updateForm");
  const input = document.getElementById("userInput");
  const output = document.getElementById("output");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    output.textContent = `You wrote: ${input.value}`;
    input.value = ""; // Clear input
  });

});
