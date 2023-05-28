const quotes = [
  { quote: "형이 제일 좋아하는 동생", author: "JJH" },
  { quote: "빨리 나 사랑한다고 말해", author: "LTY" },
  { quote: "사랑해요", author: "JJH" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
