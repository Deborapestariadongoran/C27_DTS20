function myFunction() {
var x = document.getElementById("myMenu");
  if (x.className === "header-menu") {
    x.className += " responsive";
  } else {
    x.className = "header-menu";
  }
}
