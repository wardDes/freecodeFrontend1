import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<!-- wrapper component-->*/}
        <div className="container-fluid">
            {/*<!-- root component -->*/}
            <div id="wrapper">
                {/*<!-- DisplayQA component-->*/}
                <div id="quote-box text-center">
                    {/*<!--QuoteAuthor component-->*/}
                    <div className="quote-text">
                        <i className="fa fa-quote-left"> </i><span id="text"></span>
                    </div>
                    <div className="quote-author">
                        - <span id="author"></span>
                    </div>
                    {/*<!--QuoteAuthor component-->*/}
                    {/*<!-- Button component -->*/}
                    <div className="buttons">
                        <div id="bstart">
                            <a className="button" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=somequote" id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="button" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=currentAuthor&content=currentQuote&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-tumblr"></i>
                            </a>
                        </div>
                        <div id="bend">
                            <button className="button" id="new-quote">New quote</button>
                        </div>
                    </div>
                    {/*<!-- Button component -->*/}
                </div>
                {/*<!-- DisplayQA component-->*/}
            </div>
            {/*<!-- root component -->*/}
        </div>
        {/*-- wrapper component-->*/}
    </div>
  );
}

export default App;
