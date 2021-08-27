const images = ["0.jpg", "1.jpeg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // 자바스크립트에서 img 요소를 생성

bgImage.src = `img/${chosenImage}`; // html의 img 태그는 img/ 형식이기 때문에 img/ + {chosenimage}로 만든다.
bgImage.classList.add("background_image");

document.body.appendChild(bgImage); // 생성한 img 태그를 html의 body 부분에 넣는다.
