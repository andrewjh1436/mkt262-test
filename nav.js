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
            <a href="contact.html">Contact</a>
        </nav>
    `;


    let currentPage =
        window.location.pathname.split("/").pop();


    if (currentPage === "") {
        currentPage = "index.html";
    }


    const links =
        document.querySelectorAll(".primary-nav a");


    links.forEach(function (link) {

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

    });

});
