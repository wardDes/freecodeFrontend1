import React from 'react';
import '../App.css';



export class DisplayQuoteAuthors extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quotes: [],
            quoteObj: {}
        }
    }

    buildQuotes = (data) =>{
        this.setState({quotes: [].concat(Object.values(data))});
        this.setState({quoteObj: this.state.quotes[0][Math.floor(Math.random() * this.state.quotes[0].length)]});
    }
    
    componentDidMount(){
        console.log('didmount');
        const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
        .then(response => response.json())
        .then(this.buildQuotes)
        .catch(err => console.log(err))
    }


    render(){
        return(
            <div>
                <div>
                    <div className="wrapper"> 
                      <div id="quote-box">
                        <div className="quote-text">
                            <i className="fa fa-quote-left"> </i><span id="text"></span>
                        </div>
                        <div className="quote-author">
                            - <span id="author"></span>
                        </div>
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
                                <button className="button" id="new-quote">new quote</button>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}


export default DisplayQuoteAuthors