const button = document.getElementById("toggleVideos");
const videos = document.getElementById("Favorite Songs");

button.addEventListener("click", () => {
    if (videos.style.display === "none") {
        videos.style.display = "block";
        button.textContent = "Show my favorite songs";
    } else {
        videos.style.display = "none";
        button.textContent = "Hide my favorite songs";document.getElementById("toggleVideos").addEventListener("click", function() {
            const section = document.getElementById("favoriteSongs");
            if (window.getComputedStyle(section).display === "none") {
                section.style.display = "block";
                this.textContent = "Hide my favorite songs";
            } else {
                section.style.display = "none";
                this.textContent = "Show my favorite songs";
            }
        });

    }
});