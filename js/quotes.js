const quotes = [
  { quote: "형이 제일 좋아하는 동생" },
  { quote: "빨리 나 사랑한다고 말해" },
  { quote: "사랑해요" },
];

const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;
