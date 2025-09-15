// Script to handle airport pricing toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("peakToggle");
  const label = document.getElementById("peakLabel");
  const priceCells = document.querySelectorAll(".price-col");

  function updatePrices() {
    priceCells.forEach((cell) => {
      const off = cell.getAttribute("data-off");
      const peak = cell.getAttribute("data-peak");
      cell.textContent = `$${toggle.checked ? peak : off}`;
    });
    label.textContent = toggle.checked ? "Peak" : "Off-Peak";
  }

  if (toggle) {
    toggle.addEventListener("change", updatePrices);
    updatePrices();
  }
});