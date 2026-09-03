document.addEventListener("DOMContentLoaded", function () {
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <div class="nav-container">
      <a href="index.html">About Me</a>
      <a href="research.html">Research</a>
      <a href="teaching.html">Teaching</a>
      <a href="personal.html">Personal</a>
    </div>
  `;

  document.body.prepend(nav);
});

  <script src="nav.js"></script>

</body>
</html>
