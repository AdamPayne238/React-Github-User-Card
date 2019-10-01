import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component{
  state = {
    users: [],
    userText: 'Adam'
  };

  componentDidMount(){
    axios
      .get('https://api.github.com/users/AdamPayne238')
      .then(response => {
        console.log("Response CDM", response.data)
        this.setState({
          users: response.data
        });
      })
      .catch(error => console.log(error));

      window.addEventListener('resize', this.handleResize);
  }

  handleChanges = event => {
    this.setState({
      userText: event.target.value
    });
  };

  fetchUsers = event => {
    event.preventDefault();
    axios
      .get('https://api.github.com/users/AdamPayne238/followers')
      .then(response => {
        console.log("Response FetchUsers", response.data)
        this.setState({
          users: response.data
        });
      })
      .catch(error => console.log(error));
  };


  render(){
    return(
      <div className="App">
        <h1>Github</h1>
        <p>{this.state.userText}</p>
        <p>{this.state.handleChanges}</p>
        <button onClick={this.fetchUsers}>Fetch Users</button>
        <div className="users">
          {/* {this.state.users.map(user => (
            <img width="200" src={user} key={user} alt={user} />
          ))} */}
        </div>
      </div>
    )
  }










}


export default App;
