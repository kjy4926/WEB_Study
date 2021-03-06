import React, { Component } from 'react';

class TOC extends Component {
    render(){
      var lis = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lis.push(
          <li key={data[i].id}>
            <a 
              href="/"
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(Number(e.target.dataset.id));
              }.bind(this)}
            >{data[i].title}
            </a>
          </li>)
        i += 1
      }

      return(
        <nav>
          <ul>
            {lis}
          </ul>
        </nav>
      );
    }
  }
  export default TOC;