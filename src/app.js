fetch("https://darth-ness.github.io/my-website/banner.html")
    .then((response) => response.text())
    .then((data) => document.getElementById("banner").innerHTML = data);

