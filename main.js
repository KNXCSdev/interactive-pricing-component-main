const pageViews = document.getElementById("views");
const rangeInput = document.getElementById("range-input");
const price = document.getElementById("price");
const switchInput = document.getElementById("switch-input");
const duration = document.getElementById("duration");

const views = [
  { value: 0, cost: 8, count: "10K" },
  { value: 20, cost: 12, count: "50K" },
  { value: 40, cost: 16, count: "100K" },
  { value: 60, cost: 24, count: "500K" },
  { value: 80, cost: 32, count: "1M" },
];

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
  views.forEach((view) => {
    if (inputValue >= view.value) {
      const adjustedCost = switchInput.checked ? view.cost * 0.75 : view.cost;
      pageViews.innerText = view.count;
      price.innerText = `$${adjustedCost.toFixed(2)}`;
      duration.innerText = switchInput.checked ? "/ year" : "/ month";
    }
  });
}
