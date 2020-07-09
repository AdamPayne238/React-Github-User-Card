import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import UserCard from "./UserCard";
import UserList from "./UserList";

class App extends Component{
  constructor(){
    super();
    this.state = {
      users: [],
      followers: [],
  }
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
      .catch(error => console.log(error))

    axios
      .get('https://api.github.com/users/AdamPayne238/followers')
      .then(response => {
        console.log("2nd Response Followers", response.data)
        this.setState({
          followers: response.data
      });
    }, [])
    .catch(error => console.log(error))
  }

  handleChanges = event => {
    this.setState({
      userText: event.target.value
    });
  };

  render(){
    return(
      <div className="App">
  
        <UserCard 
        users={this.state.users}
       
        />
        
        
        <UserList 
        followers={this.state.followers}
        users={this.state.users}
        />
      
      </div>
    )
  }
}

export default App;


