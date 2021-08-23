const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); // 현재 시간을 불러오는 Object
  const hours = String(date.getHours()).padStart(2, "0"); // 2글자인 String에 앞에 0을 추가, padEnd는 뒤에 추가
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 1000ms(1초)마다 반복해서 실행시켜주는 setInterval
