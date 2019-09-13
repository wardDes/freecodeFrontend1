import React from 'react';
import '../App.css';



export class DisplayQuoteAuthors extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quotes: [],
            quoteObj: {},
            color: '#00F'
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeQuote = this.changeQuote.bind(this);
        this.getBodyElement = this.getBodyElement.bind(this);
    }

    handleClick(){
        this.changeColor();
        this.changeQuote()
    }

    changeColor(){
        let color1  = Math.floor(Math.random() * 256 + 1).toString(16);
        let color2 =  Math.floor(Math.random() * 256 + 1).toString(16);
        let color3 =  Math.floor(Math.random() * 256 + 1).toString(16);
        if(color1.length < 2){
            color1 = "0"+ color1;
        }else if (color2.length < 2){
            color2 = "0" + color2;
        }else if(color3.length < 2){
            color3 = "0" + color3;
        }
        let color = "#" + color1 + color2 + color3;
        this.setState({color: color});
    }

    changeQuote(){
        this.setState({quoteObj: this.state.quotes[0][Math.floor(Math.random() * this.state.quotes[0].length)]});
    }

    getBodyElement(){
        let bodyBg = document.querySelector('body')
        bodyBg.style.background = this.state.color;
        bodyBg.style.borderColor = this.state.color;
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
        const color = this.state.color;
        return(
            <div>
                <div>
                    <div className="wrapper" style={{color: color}}> 
                      <div id="quote-box">
                        <div className="quote-text">
                            <i className="fa fa-quote-left"> </i><span id="text">{this.state.quoteObj.quote}</span>
                        </div>
                        <div className="quote-author">
                            - <span id="author">{this.state.quoteObj.author}</span>
                        </div>
                        <div className="buttons">
                            <div id="bstart">
                                <a className="button" style={{color: color}} href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=somequote" id="tweet-quote" title="Tweet this quote!" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a className="button" style={{color: color}} href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=currentAuthor&content=currentQuote&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-tumblr"></i>
                                </a>
                            </div>
                            <div id="bend">
                                <button className="button" style={{backgroundColor: color, color:"#FFF"}} id="new-quote" onClick= {this.handleClick}>new quote</button>
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