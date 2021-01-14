const mobile = document.getElementById("mobile");
const desktop = document.getElementById("desktop");

const drawer = document.getElementById("drawer");
const closeBth = document.getElementById("close-btn");
const hamburger = document.getElementById("hamburger");

// functions
function handleResize() {
  if (window.innerWidth < 1000) {
    desktop.style.display = "none";
    mobile.style.display = "flex";
  } else {
    mobile.style.display = "none";
    desktop.style.display = "flex";
  }
}

function handleDrawer() {
  if (drawer.style.display === "flex") {
    drawer.style.display = "none";
  } else {
    drawer.style.display = "flex";
  }
}

// event listeners
hamburger.addEventListener("click", handleDrawer);
closeBth.addEventListener("click", handleDrawer);
window.onresize = handleResize;
window.onload = handleResize;
