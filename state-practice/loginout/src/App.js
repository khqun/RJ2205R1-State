import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      mode: "out"
    }  
  }
  modeChangein = () =>{
    this.setState({
      mode: "in"
    })
  }
  modeChangeout = () =>{
    this.setState({
      mode: "out"
    })
  }
  render(){
    if (this.state.mode === "out") 
    {return (
      <div style={{textAlign: 'center'}}>
        <h1>Please Log in</h1>
        <button onClick={this.modeChangein}>Log in</button>
      </div>
    )   
    }
    else {
      return (
        <div style={{textAlign: 'center'}}>
          <h1>Welcome</h1>
          <button onClick={this.modeChangeout}>Log out</button>
        </div>
      )
    }
    
  }

}
export default App;
