import './App.css';
import React from 'react'
class App extends React.Component{
   constructor(props){
    super(props);
    this.state = {
      isExpand: false
    }
   }
   handleClick=()=>{
    this.setState({isExpand: !this.state.isExpand})
   }
   render(){
    if(!this.state.isExpand){
      return(
        <div>
          <div style={{width: '100%',backgroundColor: 'green', fontWeight: 'bold', fontSize: '100px', padding: '15px'}}>Conditional Rendering</div>
          <button onClick={this.handleClick}>Xem giới thiệu</button>
        </div>
      )
    }
    else {
      return(
        <div>
          <div style={{width: '100%',backgroundColor: 'green', fontWeight: 'bold', fontSize: '100px', padding: '15px'}}>Conditional Rendering</div>
          <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </h3>
          <button onClick={this.handleClick}>Đóng giới thiệu</button>
        </div>
      )
    }
   }
}
export default App;
