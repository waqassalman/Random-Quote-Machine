import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const quote_data = [
    {
      text: "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray"
    },
    {
      text: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      author: "Vincent Van Gogh"
    },
    {
      text: "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker"
    },
    {
      text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      author: "Erica Jong"
    },
    {
      text: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth"
    }
  ]
  const [index, setIndex] = useState(0);
  var body = document.querySelector("body");

  const nextSlide = () => {
    setIndex((next) => (next + 1) % quote_data.length);
    console.log(quote_data.length, " ",index, body)
    body.setAttribute('id',`body-style-${index + 1}`)

    }


  return (
    <div className="App">
      <div id="wrapper">
        <div id="quote-box" key={index} className={`box-${index}`}>
          <h1 id="text"><i class="fa-solid fa-quote-left"></i>{quote_data[index].text}</h1>
          <p id="author">
          -{quote_data[index].author}
          </p>
          <a href="twitter.com/intent/tweet" class="tweet-box" id={`tweet-quote-${index}`} target="_blank"><i className="fa-brands fa-twitter"></i></a>
          <a href="twitter.com/intent/tweet" class="tweet-box" id={`tweet-quote-${index}`}><i className="fa-brands fa-tumblr" target="_blank"></i></a>
          <button className="btn btn-default" id="new-quote" onClick={nextSlide}>
            Next Quote
          </button>

        </div>

      </div>
    </div>

  );


}

export default App;
