import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Add_item from './components/Add_item.js'
import List_of_button from './components/List_of_button.js'
import To_do_list from './components/To_do_list.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      singUp:["暱稱","帳號", "密碼"],
      singIn:["帳號", "密碼"],
      check:true
    };
  }
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
        <Add_item />
        <List_of_button />
        <To_do_list />
      </div>
    );
  }
}

export default App;