import React, { Component } from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:1,
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      subject_web:{title:'WEB', sub:'World Wide Web'},
      subject_react:{title:'React', sub:'For UI'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hyper Text Language'},
        {id:2, title:'CSS', desc:'CSS is design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
        {id:4, title:'PHP', desc:'PHP is Hypertext Preprocessor'}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      var data = this.state.contents.filter(item => item.id === this.state.selected_content_id)
      console.log(data)
      _title = data[0].title;
      _desc = data[0].desc;
    }
    return (
      <div className='App'>
        <Subject 
          title={this.state.subject_web.title} 
          sub={this.state.subject_web.sub}
          onChangePage={function(){
            this.setState({mode:'read'});
          }.bind(this)}
        >
        </Subject>
        <Subject 
          title={this.state.subject_react.title} 
          sub={this.state.subject_react.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:id
            })
          }.bind(this)}
          data={this.state.contents}>
        </TOC>
        <Content 
          title={_title} 
          desc={_desc}>
        </Content>
      </div>
    );
  }
}

export default App;