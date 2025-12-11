addEventListener("mousemove", function (event) {
  console.log(event.clientX, event.clientY);
  document.querySelector(".box").style.setProperty("--x", event.clientX + "px");
  document.querySelector(".box").style.setProperty("--y", event.clientY + "px");
});
