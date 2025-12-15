const button = document.getElementById("toggleVideos");
const videos = document.getElementById("Favorite Songs");

button.addEventListener("click", () => {
    if (videos.style.display === "none") {
        videos.style.display = "block";
        button.textContent = "Show my favorite songs";
    } else {
        videos.style.display = "none";
        button.textContent = "Hide my favorite songs";
    }
});