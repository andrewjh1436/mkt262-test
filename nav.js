document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    if (!navigation) {
        return;
    }

    navigation.innerHTML = `
        <nav class="primary-nav">

            <a href="index.html">
                Home
            </a>

            <a href="about.html">
                About Me
            </a>

            <a href="research.html">
                Research
            </a>

            <a href="teaching.html">
                Teaching
            </a>

            <a href="personal.html">
                Personal
            </a>

        </nav>
    `;


    /* Highlight the page the user is currently on */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks =
        document.querySelectorAll(".primary-nav a");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
