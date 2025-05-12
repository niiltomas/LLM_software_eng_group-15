document.addEventListener("DOMContentLoaded", () => {

  // 1. Toggle visibility of the comparison table
  const toggleTableBtn = document.getElementById("toggleTableBtn");
  const comparisonTable = document.getElementById("comparisonTable");

  toggleTableBtn.addEventListener("click", () => {
    if (comparisonTable.style.display === "none") {
      comparisonTable.style.display = "table";
      alert("Comparison table is now visible.");
    } else {
      comparisonTable.style.display = "none";
      alert("Comparison table is now hidden.");
    }
  });

  // 2. Alert on form submit
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted! Thank you.");
  });

  // 3. Theme toggle
  const themeBtn = document.getElementById("themeBtn");
  const body = document.body;

  themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    alert("Theme changed!");
  });

});
