import React, { Component } from 'react';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import Subject from './components/Subject'
import Control from './components/Control'
import './App.css';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      selected_content_id:1,
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      subject_web:{title:'WEB', sub:'World Wide Web'},
      subject_react:{title:'React', sub:'For UI'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'CSS is design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
        {id:4, title:'PHP', desc:'PHP is Hypertext Preprocessor'}
      ]
    }
  }
  getReadContent(){
    var data = this.state.contents.filter(item => item.id === this.state.selected_content_id)
    return data;
  }
  getIndex(){
    var idx = this.state.contents.findIndex(i => i.id === this.state.selected_content_id)
    return idx;
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'read'){
      var data = this.getReadContent()[0]
      _article = <ReadContent title={data.title} desc={data.desc}></ReadContent>
    }else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title, _desc){
        var _contents = Array.from(this.state.contents);
        _contents.push(
          {id:this.state.contents[this.state.contents.length-1].id+1, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:_contents.length
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === "update"){
      var _data = this.getReadContent()[0]
      _article = <UpdateContent data={_data} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        _contents[this.getIndex()] = {id:_id, title:_title, desc:_desc}
        this.setState({
          contents:_contents,
          mode:'read'
        }) 
      }.bind(this)}></UpdateContent>
    }
    return _article
  }
  render(){
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
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              var _contents = Array.from(this.state.contents);
              _contents.splice(this.getIndex(), 1);
              this.setState({
                contents:_contents,
                mode:'welcome'
              });
              alert('Delete Success!!');
            }
          }else{
            this.setState({
              mode:_mode
            })
        }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;