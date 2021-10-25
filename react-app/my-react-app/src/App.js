import React, { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject_web:{title:"WEB", sub:"World Wide Web"},
      subject_react:{title:"React", sub:"For UI"},
      contents:[
        {id:1, link:"/docs/HTML.html", title:"HTML", desc:"HTML is Hyper Text Language"},
        {id:2, link:"/docs/CSS.html", title:"CSS", desc:"CSS is design"},
        {id:3, link:"/docs/JS.html", title:"JavaScript", desc:"JavaScript is for interactive"},
        {id:4, link:"/docs/PHP.html", title:"PHP", desc:"PHP is Hypertext Preprocessor"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject_web.title} 
          sub={this.state.subject_web.sub}>
        </Subject>
        <Subject 
          title={this.state.subject_react.title} 
          sub={this.state.subject_react.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content 
          title={this.state.contents[0].title} 
          desc={this.state.contents[0].desc}>
        </Content>
      </div>
    );
  }
}

export default App;