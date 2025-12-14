const button = document.getElementById("toggleButton");
const content = document.getElementById("hiddenInfo");

button.addEventListener("click", () => {
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Hide";
    } else {
        content.style.display = "none";
        button.textContent = "Show More";
    }
});

