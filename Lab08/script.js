function toggleMenu() {
    var nav = document.getElementById("myNav");

    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}