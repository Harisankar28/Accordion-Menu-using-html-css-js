var accordionHeaders = document.getElementsByClassName("accordion-header");

Array.from(accordionHeaders).forEach(function(header) {
  header.addEventListener("click", function() {
    var content = this.nextElementSibling;
    content.style.display = (content.style.display === "none") ? "block" : "none";
    this.classList.toggle("active");
  });
});
