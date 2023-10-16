function darkMode() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');

    if (document.body.getAttribute("class") == 'light') {
        document.getElementById("modeButton").innerHTML = "Dark Mode"
    } else {
        document.getElementById("modeButton").innerHTML = "Light Mode"
    }
}

