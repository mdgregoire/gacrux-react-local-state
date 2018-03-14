import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    user: {
      name: '',
      city: '',
    },
  };
  //
  // this.handleName = this.handleName.bind(this);
  // this.handleCity = this.handleCity.bind(this);
  // this.handleChangeFor = this.handleChangeFor.bind(this);

}

// handleName(event){
//   console.log(event.target.value);
//   this.setState({user: {...this.state.user, name: event.target.value}});
// }
//
// handleCity(event){
//   console.log(event.target.value);
//   this.setState({user: {...this.state.user, city: event.target.value}});
// }

handleChangeFor = (propertyName) => (event) => {
  this.setState({
    user:{
  ...this.state.user,
  [propertyName]: event.target.value,
    }
  })
}

// handleChangeFor = function (propertyName) {
//   return function(event){
//     this.setState({
//       user: {
//         ...this.state.user,
//         [propertyName]: event.target.value
//       }
//     })
//   }
// }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.handleChangeFor('name')} placeholder = "name"/>
        <input onChange={this.handleChangeFor('city')} placeholder = "city"/>
        <input onChange={this.handleChangeFor('bowlingScore)')} placeholder = "BowlingScore"/>

        <p>{this.state.user.name} lives in {this.state.user.city}.</p>

      </div>
    );
  }
}

export default App;
