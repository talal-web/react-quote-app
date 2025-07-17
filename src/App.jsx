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
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      height: '100vh', background: '#f0f8ff',
      padding: '20px', textAlign: 'center'
    }}>
      <h1>🌟 Daily Quote</h1>
      <blockquote style={{
        fontSize: '1.5rem', fontStyle: 'italic',
        margin: '20px 0', maxWidth: '600px'
      }}>
        “{quote}”
      </blockquote>
      <button onClick={handleNewQuote} style={{
        padding: '10px 20px', fontSize: '1rem',
        backgroundColor: '#007bff', color: '#fff',
        border: 'none', borderRadius: '5px',
        cursor: 'pointer'
      }}>
        New Quote
      </button>
    </div>
  );
