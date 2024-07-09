import React, { useEffect, useState } from "react";
import "./QuoteGenerator.css";

const quotesPromise = import("../data/quotes.json");

interface IQuote {
  author: string;
  content: string;
}

interface IProps {
  randomQuoteClicked: () => void;
}

const QuoteGenerator: React.FC<IProps> = (props) => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [quote, setQuote] = useState<IQuote>({ author: "", content: "" });

  useEffect(() => {
    quotesPromise.then((module) => {
      console.log(module.default);
      setQuotes(module.default);
      setQuote(module.default[0]);
    });
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    props.randomQuoteClicked();
  };

  return (
    <div id="quote-box" className="center-container">
      <p id="text" className="quote-text">
        "{quote.content}"
      </p>
      <p id="author" className="quote-author">
        - {quote.author}
      </p>
      <a
        id="tweet-quote"
        className="tweet-button"
        href="twitter.com/intent/tweet"
        target="_blank"
      >
        Tweet Quote
      </a>
      <button id="new-quote" className="next-quote-button" onClick={getRandomQuote}>
        Next Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
