import './App.css';
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list : [],
      item: ''
    }
  }
  handleChange = (event) =>  {
    this.setState({
      item: event.target.value
    })
  }
  addItem = () => {
    if (this.state.item){
      var newList = this.state.list.slice();
      this.setState({list: newList})
    }
    console.log(this.state.list);
  }
  render(){
    return (
        <div style={{textAlign: 'center'}}>
          <input type="text" onChange={this.handleChange}>
          </input>
          <button onClick={this.addItem}>Add</button>
          <h1>{this.state.list.map((item) =>{
            return <p>{item}</p>
          })}</h1>
        </div>
    )
  }
}

export default App;
