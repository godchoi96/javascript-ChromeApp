const quotes = [
  {
    quote:
      "숙고할 시간을 가져라, 그러나 행동할 때가 오면 생각을 멈추고 뛰어들어라.",
    author: "-나폴레옹 보나파르트",
  },
  {
    quote:
      "과도한 욕망보다 큰 참사는 없다. 불만족보다 큰 죄는 없다. 그리고 탐욕보다 큰 재앙은 없다.",
    author: "-노자",
  },
  {
    quote:
      "걷기는 잊혀진 기술이 아니다. 누구라도 어쨌든 차고까지는 걸어가야 한다.",
    author: "-에반 에사르",
  },
  {
    quote:
      "나는 자신의 욕구를 극복하는 사람이 자신의 적을 이기는 사람보다 용감하다고 믿는다.",
    author: "-아리스토텔레스",
  },
  {
    quote:
      "휴대할 수 있는 것만 소유하고, 언어, 국가, 사람들을 알아라. 기억을 여행가방 삼아라.",
    author: "-알렉산드르 솔제니친",
  },
  {
    quote:
      "내가 가장 불신하는 이들은 우리의 삶을 향상시키고자 하면서도 단 한가지 방법 밖에 모르는 사람들이다.",
    author: "-프랭크 허버트",
  },
  {
    quote: "인간은 평등하다. 그러나 태생이 아닌 미덕이 차이를 만든다.",
    author: "-볼테르",
  },
  {
    quote: "용기란, 모든 다른 미덕이 타고 오르는 사다리다.",
    author: "-클레어 부스 루스",
  },
  {
    quote:
      "유머감각은 리더십의 기술, 대인관계의 기술, 일 처리 기술의 일부분이다.",
    author: "-드와이트 데이비드",
  },
  {
    quote: "사랑에 의해 행해지는 것은 언제나 선악을 초월한다.",
    author: "-프레드리히 니체",
  },
]; // 명언 10개 배열

const quote = document.querySelector("#quote span:first-child"); // id가 "quote"인 span의 첫번째 span
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Math.floor() - 내림, Math.round() - 반올림, Math.ceil() - 올림. quotes.length를 통한 배열 수 변경에도 유도리있는 대처

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
