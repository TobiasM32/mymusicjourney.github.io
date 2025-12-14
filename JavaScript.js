const button = document.getElementById("toggleVideos");
const videos = document.getElementById("Favorite Songs");

button.addEventListener("click", () => {
    if (videos.style.display === "none") {
        videos.style.display = "block";
        button.textContent = "Hide Videos";
    } else {
        videos.style.display = "none";
        button.textContent = "Show Videos";
    }
});