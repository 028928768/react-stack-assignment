import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ButtonController extends React.Component{
//   constructor(props){
//     super(props);
    
//   }
// }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state ={count : 0};
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
   increase(){
     this.setState(prevState => ({
       count:prevState.count +1
     }) );
   }
   decrease(){
     this.setState(prevState => ({
       count:prevState.count-1
     })
    ) ;
   }
  render() {
    return (
         
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Hello world!</h1>
         </header>
         <p className="App-intro">
           The following number will be counted from buttons
         </p>
           <br/>
           <h1> count :{this.state.count} </h1>
           <br/>
           <button onClick={this.increase}>+</button>
           <button onClick={this.decrease}>-</button>
       </div>
    );
  }
}

export default App;
