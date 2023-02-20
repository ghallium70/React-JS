import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      colors: [ "#282c34", 
                "#065535", 
                "#008080", 
                "#ff7373", 
                "#003366", 
                "#ffc0cb", 
                "#800080", 
                "#20b2aa", 
                "#ffc3a0", 
                "#f6546a", 
                '#0e2f44', 
                "#6897bb", 
                "#0a75ad", 
                "#8a2be2",
                "#3399ff",
                "#794044"],
      color_seed: Math.floor(Math.random()* 16),
      quotes:[
        {"author": "John Keats", "text": "I love you the more in that I believe you had liked me for my own sake and for nothing else."}, 
        {"author": "Nelson Mandela","text": "The greatest glory in living lies not in never falling, but in rising every time we fall."},
        {"author": "Walt Disney",  "text": "The way to get started is to quit talking and begin doing"},
        {"author": "Steve Jobs",  "text": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."},
        {"author": "Eleanor Roosevelt", "text": "If life were predictable it would cease to be life, and be without flavor."},
        {"author": "Oprah Winfrey", "text": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"},
        {"author": "James Cameron", "text": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."},
        {"author": "John Lennon", "text": "Life is what happens when you're busy making other plans."},
        {"author": "Margaret Mead", "text": "Always remember that you are absolutely unique. Just like everyone else."},
        {"author": "Robert Louis Stevenson", "text": "Don't judge each day by the harvest you reap but by the seeds that you plant."},
        {"author": "Eleanor Roosevelt", "text": "The future belongs to those who believe in the beauty of their dreams."},
        {"author": "Benjamin Franklin", "text": "Tell me and I forget. Teach me and I remember. Involve me and I learn."},
        {"author": "Helen Keller", "text": "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."},
        {"author": "Aristotle", "text": "It is during our darkest moments that we must focus to see the light."},
        {"author": "Anne Frank", "text": "Whoever is happy will make others happy too."},
        {"author": "Ralph Waldo Emerson", "text": "Do not go where the path may lead, go instead where there is no path and leave a trail. "},
        {"author": "Maya Angelou", "text": "You will face many defeats in life, but never let yourself be defeated. "},
        {"author": "Nelson Mandela", "text": "The greatest glory in living lies not in never falling, but in rising every time we fall."},
        {"author": "Abraham Lincoln", "text": "In the end, it's not the years in your life that count. It's the life in your years."},
        {"author": "Babe Ruth", "text": "Never let the fear of striking out keep you from playing the game."},
        {"author": "Thomas A. Edison", "text": "Many of life's failures are people who did not realize how close they were to success when they gave up. "},
        {"author": "Dr. Seuss", "text": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."},
        {"author": "Tonny Robins", "text": "The only impossible journey is the one you never begin."},
        {"author": "Albert Einstein", "text": "Only a life lived for others is a life worthwhile."},
        {"author": "Mae West", "text": "You only live once, but if you do it right, once is enough."},
        {"author": "Ralph Waldo Emerson", "text": "Live in the sunshine, swim the sea, drink the wild air."},
        {"author": "Henry David Thoreau", "text": "Go confidently in the direction of your dreams! Live the life you've imagined."},
        {"author": "John Wooden", "text": "Do not let making a living prevent you from making a life."},
        {"author": "Marilyn Monroe", "text": "Keep smiling, because life is a beautiful thing and there's so much to smile about. "},
        {"author": "Charles Dickens", "text": "Life is made of ever so many partings welded together."},
        {"author": "Thomas A. Edison", "text": "Many of life's failures are people who did not realize how close they were to success when they gave up."},
        {"author": "Winston S. Churchill", "text": "Success is not final; failure is not fatal: It is the courage to continue that counts."},
        {"author": "Barack Obama", "text": "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."},
        {"author": "Herman Melville", "text": "It is better to fail in originality than to succeed in imitation."},
      ],
      seed: Math.random(),
      opacity: 1,
      showingQuote: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state=>({
      showingQuote: false
    }));

    setTimeout( () => {this.setState(state=>({
      colors: state.colors,
      quotes: state.quotes,
      seed: Math.random(),
      color_seed: Math.floor(Math.random()* state.colors.length),
      showingQuote: true
    }))
    document.documentElement.style.setProperty('--random-color', this.state.colors[this.state.color_seed]);
    },625);

  }

  render() {
    let pos = Math.floor(this.state.seed* this.state.quotes.length)
    let quote = this.state.quotes[pos]
    document.documentElement.style.setProperty('--random-color', this.state.colors[this.state.color_seed]);

    return (
        <div id="quote-box" className={`${this.state.showingQuote?'show':'hide'}`} >
          <div id="text">
            {quote.text}
          </div>
          <div id="author">
            - {quote.author}
          </div>
          <footer>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <button id="new-quote" onClick={this.handleClick} >
              New quote
            </button>
          </footer>
        </div>
    );
  }
}

export default App;
