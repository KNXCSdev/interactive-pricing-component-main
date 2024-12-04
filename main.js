const pageViews = document.getElementById("views");
const rangeInput = document.getElementById("range-input");
const price = document.getElementById("price");
const switchInput = document.getElementById("switch-input");
const duration = document.getElementById("duration");

const values = [0, 20, 40, 60, 80];
const costs = [8, 12, 16, 24, 32];
const viewCounts = ["10K", "50K", "100K", "500K", "1M"];

switchInput.addEventListener("change", () => updatePlan(rangeInput.value));
rangeInput.addEventListener("input", (e) => updateRangeStyleAndPlan(e.target.value));

function updateRangeStyleAndPlan(inputValue) {
  const percentage = (inputValue * 100) / 80;
  rangeInput.style.background = `
    linear-gradient(
      to right,
      hsl(174, 77%, 80%) ${percentage}%,
      hsl(224, 65%, 95%) ${percentage}%
    )`;
  updatePlan(inputValue);
}

function updatePlan(inputValue) {
  for (let i = values.length - 1; i >= 0; i--) {
    if (inputValue >= values[i]) {
      const adjustedCost = switchInput.checked ? costs[i] * 0.75 : costs[i];
      pageViews.innerText = viewCounts[i];
      price.innerText = `$${adjustedCost.toFixed(2)}`;
      duration.innerText = switchInput.checked ? "/ year" : "/ month";
      break;
    }
  }
}
