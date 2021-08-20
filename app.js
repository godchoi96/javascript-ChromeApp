const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (title.classList.contains(clickedClass)) {
    title.classList.remove(clickedClass);
  } else {
    title.classList.add(clickedClass);
  }
  // 위 다섯 문장을 title.classList.toggle("clicked"); 로 대체 가능
}

title.addEventListener("click", handleTitleClick);
