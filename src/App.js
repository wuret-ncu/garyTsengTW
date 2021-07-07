import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import AddItem from './components/AddItem.js'
import ListOfButton from './components/ListOfButton.js'
import ToDoList from './components/ToDoList.js'

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     singUp:["暱稱","帳號", "密碼"],
  //     singIn:["帳號", "密碼"],
  //     check:true
  //   };
  // }
  //lifecycle
  componentDidMount(){
    console.log("Welcome~~")
  }
  componentDidUpdate() {
    console.log("Update")
  }
  
  render(){
    return (
      <div>
        <Nav />
        {/* <SingIn name={this.state.singIn} onClick={()=>{this.setState({check:!this.state.check})}} />
        <SingUp name={this.state.singUp} onClick={()=>{this.setState({check:!this.state.check})}} /> */}
        <AddItem />
        <ListOfButton />
        <ToDoList name={["跑步", "洗浴室", "讀書"]} />
      </div>
    );
  }
}

export default App;