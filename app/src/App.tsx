import React from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import "./App.css";

function App() {
  const randomQuoteClicked = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    document.body.style.opacity = "0.5"; // Add dimming effect

    // Add fading effect
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0.5";
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 300);
  };

  return (
    <>
      <div>
        <div className="column">
          <QuoteGenerator randomQuoteClicked={randomQuoteClicked} />
        </div>
      </div>

      <p className="footer">
        Designed and Developed by:{" "}
        <a href="https://www.linkedin.com/in/anasmhaish/">Anas Mhaish</a>
      </p>
    </>
  );
}

export default App;
