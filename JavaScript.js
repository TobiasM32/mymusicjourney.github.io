document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggleVideos");
    const section = document.getElementById("favoriteSongs");

    if (!button || !section) {
        console.error("Toggle button or favoriteSongs section not found.");
        return;
    }

    button.addEventListener("click", () => {
        section.classList.toggle("show");
        button.textContent = section.classList.contains("show")
            ? "Hide my favorite songs"
            : "Show my favorite songs";
    });
});
