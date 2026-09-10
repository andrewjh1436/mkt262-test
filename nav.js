document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    if (!navigation) {
        return;
    }

    navigation.innerHTML = `
        <nav class="primary-nav">

            <a href="index.html">Home</a>

            <a href="about.html">About Me</a>

            <a href="research.html">Research</a>

            <a href="teaching.html">Teaching</a>

            <a href="personal.html">Personal</a>

        </nav>
    `;


    // Find the current page
    let currentPage = window.location.pathname.split("/").pop();


    // GitHub Pages may leave the homepage blank
    if (currentPage === "") {
        currentPage = "index.html";
    }


    // Highlight the current page
    const navLinks = document.querySelectorAll(".primary-nav a");

    navLinks.forEach(function (link) {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });

});
