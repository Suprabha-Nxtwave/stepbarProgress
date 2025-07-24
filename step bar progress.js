const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
    currentStep++;
    if (currentStep > circles.length) currentStep = circles.length;
    updateSteps();
});

prevBtn.addEventListener("click", () => {
    currentStep--;
    if (currentStep < 1) currentStep = 1;
    updateSteps();
});

function updateSteps() {
    circles.forEach((circle, idx) => {
        if (idx < currentStep) {
            circle.classList.add("active");
            circle.innerHTML = "✔️";
        } else {
            circle.classList.remove("active");
            circle.innerHTML = "❌";
        }
        if (!circle.classList.contains("active")) {
            circle.textContent = circle.dataset.step;
        }
    });

    const activeCircles = document.querySelectorAll(".circle.active").length;
    const percent = ((activeCircles - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${percent}%`;

    prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = currentStep === circles.length;
}