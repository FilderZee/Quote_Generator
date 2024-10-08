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
      { quote: "“If you tell the truth, you don't have to remember anything.”", quoteauthor: "Mark Twain" },
      { quote: "“A friend is someone who knows all about you and still loves you.”", quoteauthor: "Elbert Hubbard" },
      { quote: "“Always forgive your enemies, nothing annoys them so much.”", quoteauthor: "Oscar Wilde" },
      { quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”", quoteauthor: "Ralph Waldo Emerson" },
      { quote: "“I have not failed. I've just found 10,000 ways that won't work.”", quoteauthor: "Thomas A. Edison" },
      { quote: "“It is never too late to be what you might have been.”", quoteauthor: "George Eliot" },
      { quote: "“Always be a poet, even in prose.”", quoteauthor: "Charles Baudelaire" },
      { quote: "“I believe I am in Hell, therefore I am.”", quoteauthor: "Arthur Rimbaud" },
      { quote: "“Either kill me or take me as I am, because I'll be damned if I ever change.”", quoteauthor: "marquis de sade" },
      { quote: "“The mind is not a vessel to be filled, but a fire to be kindled.”", quoteauthor: "Plutarch" },
      { quote: "“Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.”", quoteauthor: "William Shakespeare" },
      { quote: "“When one woman strikes at the heart of another, she seldom misses, and the wound is invariably fatal.”", quoteauthor: "Choderlos de Laclos" },
      { quote: "“It is better to be hated for what you are than to be loved for what you are not.”", quoteauthor: "Andre Gide" },
      { quote: "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”", quoteauthor: "Marilyn Monroe" },
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