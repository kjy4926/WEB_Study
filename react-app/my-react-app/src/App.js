import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject/>
        <TOC/>
        <Content/>
      </div>
    );
  }
}

class Subject extends Component {
  render() {
    return(
      <header>
          <h1>WEB</h1>
          World Wide Web!
      </header>
    );
  }
}

class TOC extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href="./HTML.html">HTML</a></li>
          <li><a href="./CSS.html">CSS</a></li>
          <li><a href="./JS.html">JavaScript</a></li>
          <li><a href="./PHP.html">PHP</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <article>
        <h1>HTML</h1>
        Hyper Text Markup Language
      </article>
    );
  }
}

export default App;