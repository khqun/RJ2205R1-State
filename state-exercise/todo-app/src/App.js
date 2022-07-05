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
      newList.push(this.state.item);
      this.setState({list: newList})
    }
    this.setState({
      item: ''
    })
  }
  render(){
    return (
        <div style={{textAlign: 'center'}}>
          <h1>Todo List</h1>
          <input type="text" onChange={this.handleChange} value={this.state.item}>
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
