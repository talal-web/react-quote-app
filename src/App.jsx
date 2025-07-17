function App() {
  return (
    <div>
      <h1>Hello Vite + React</h1>
    </div>
  );
}

export default App;
const quotes = [
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not in what you have, but who you are.",
  "Stay away from those people who try to disparage your ambitions.",
  "The future depends on what you do today.",
  "It always seems impossible until it's done.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you."
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
import { useState } from 'react';

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    let newQuote = getRandomQuote();
    while (newQuote === quote) {
      newQuote = getRandomQuote();
    }
    setQuote(newQuote);
  };
