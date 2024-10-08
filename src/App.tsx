import QuoteButton from './QuoteButton';
import './App.css';
import { useRef } from 'react';

const App = () => {

  const time = new Date().getHours();

  const quoteText = useRef<HTMLParagraphElement>(null);
  const quoteAuthor = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    const quotes: { quote: string; quoteauthor: string }[] = [
      { quote: "“Be yourself; everyone else is already taken.”", quoteauthor: "Oscar Wilde" },
      { quote: "“So many books, so little time.”", quoteauthor: "Frank Zappa" },
      { quote: "“A room without books is like a body without a soul.”", quoteauthor: "Marcus Tullius Cicero" },
      { quote: "“You only live once, but if you do it right, once is enough.”", quoteauthor: "Mae West" },
      { quote: "“Be the change that you wish to see in the world.”", quoteauthor: "Mahatma Gandhi" },
      { quote: "“In three words I can sum up everything I've learned about life: it goes on.”", quoteauthor: "Robert Frost" },
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
   
    if (quoteText.current && quoteAuthor.current) {
      if (quoteText.current.textContent === randomQuote.quote) {
        handleClick();
        return;
      } else {
        quoteText.current.textContent = randomQuote.quote;
        quoteAuthor.current.innerHTML = `<i>${randomQuote.quoteauthor}</i>`;
      } 
    }
  };

  return (
    <>
      <div className="time__container">
        <p className="greeting__text">{time < 12 ? "Good Morning" : time < 18 ? "Good Afternoon" : "Good Evening "}</p>
      </div>
      <div className="container">
        <p className="quote__text" ref={quoteText}></p>
        <p className="quote__author" ref={quoteAuthor}></p>
        <QuoteButton onClick={handleClick} />
      </div>
    </>
  );
};

export default App;