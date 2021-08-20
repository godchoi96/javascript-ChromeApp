const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is Gone!";
}

function handleWindowsResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS NO WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD!!");
}

title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowsResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventLisnter("Online", handleWindowOnline);
