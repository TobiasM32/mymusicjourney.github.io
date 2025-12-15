/* source: https://www.w3schools.am/howto/howto_js_toggle_hide_show.html#gsc.tab=0 */
/* Makes the button show/hide the table of videos */
function toggleSongs() {
    const section = document.getElementById("favoriteSongs");
    const currentDisplay = window.getComputedStyle(section).display;

    if (currentDisplay === "none") {
        section.style.display = "block";
        document.getElementById("toggleButton").textContent = "Hide my favorite songs";
    } else {
        section.style.display = "none";
        document.getElementById("toggleButton").textContent = "Show my favorite songs";
    }
}
