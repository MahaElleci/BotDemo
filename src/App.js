import React, { Component } from 'react';
import MinimizableWebChat from './BotDemo/MinimizableBot';
import HomePage from './HUBPage/home'
// import WebPageBackground from './WebPage.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App">
       <HomePage/>
       <MinimizableWebChat />
    </div>
   );
  }
}

export default App;