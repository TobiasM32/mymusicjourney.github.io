const button = document.getElementById("toggleVideos");
const section = document.getElementById("favoriteSongs");

button.addEventListener("click", () => {
    if (window.getComputedStyle(section).display === "none") {
        section.style.display = "block";
        button.textContent = "Hide my favorite songs";
    } else {
        section.style.display = "none";
        button.textContent = "Show my favorite songs";
    }
});
