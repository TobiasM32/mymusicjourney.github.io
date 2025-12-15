// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// makes the button show/hide the table of videos
const button = document.getElementById("toggleVideos");
const section = document.getElementById("favoriteSongs");

button.addEventListener("click", () => {
    if (window.getComputedStyle(section).display === "none") {
        section.style.display = "block";
        button.textContent = "Favorite songs (show/hide)";
    } else {
        section.style.display = "none";
        button.textContent = "Favorite songs (show/hide)";
    }
});
