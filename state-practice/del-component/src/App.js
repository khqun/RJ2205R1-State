
import './App.css';
import Hello from './component/hello';
import React from 'react'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: true
    }
  }
  del = () =>{
    this.setState({
      display: false
    })
  }
  
  render(){
    if (this.state.display){
    return(
      <div>
        <Hello/>
      <button onClick={this.del}>delete</button>
    </div>
    ) 
  }
  else {
    return(
      <button onClick={this.del}>delete</button>
    )
    
  }
}
}
export default App;
