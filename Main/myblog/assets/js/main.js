document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nds-lang-toggle");
  const dropdown = document.querySelector(".nds-lang-dropdown");

  if (toggle) {
    toggle.addEventListener("click", () => {
      dropdown.classList.toggle("open");
      toggle.classList.toggle("open");
    });
  }

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      toggle.classList.remove("open");
    }
  });
});
