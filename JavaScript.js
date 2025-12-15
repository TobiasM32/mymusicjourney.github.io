/* source: https://www.w3schools.am/howto/howto_js_toggle_hide_show.html#gsc.tab=0 */
/* Makes the button show/hide the table of videos */
document.getElementById("toggleVideos").addEventListener("click", function() {
    const section = document.getElementById("favoriteSongs");
    if (window.getComputedStyle(section).display === "none") {
        section.style.display = "block";
        this.textContent = "Hide my favorite songs";
    } else {
        section.style.display = "none";
        this.textContent = "Show my favorite songs";
    }
});

