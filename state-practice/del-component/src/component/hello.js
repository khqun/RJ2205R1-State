import React from 'react';
class Hello extends React.Component{
    componentWillUnmount(){
        alert("Hello will be gone")
      }
    render(){
        return (
            <h1>Hello</h1>
        )
    }
    
}
export default Hello