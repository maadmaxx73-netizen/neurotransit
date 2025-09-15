// Script to handle multi-step booking form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  if (!form) return;
  const fieldsets = form.querySelectorAll("fieldset");
  const nextButtons = form.querySelectorAll(".next");
  const prevButtons = form.querySelectorAll(".prev");
  const progressItems = document.querySelectorAll("#progressbar li");
  const successDiv = document.getElementById("formSuccess");
  let currentStep = 0;

  function showStep(index) {
    fieldsets.forEach((fs, idx) => {
      fs.style.display = idx === index ? "block" : "none";
    });
    progressItems.forEach((li, idx) => {
      li.classList.toggle("active", idx <= index);
    });
  }

  nextButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep < fieldsets.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  prevButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    successDiv.classList.remove("hidden");
  });

  // Initialize first step
  showStep(currentStep);
});