document.addEventListener("DOMContentLoaded", function () {

    const navigation =
        document.getElementById("navigation");


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


    /* Find current page */

    let currentPage =
        window.location.pathname
        .split("/")
        .pop();


    if (
        currentPage === "" ||
        currentPage === "/"
    ) {

        currentPage =
            "index.html";

    }


    /* Highlight current page */

    const links =
        document.querySelectorAll(
            ".primary-nav a"
        );


    links.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (
            linkPage === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });

});
