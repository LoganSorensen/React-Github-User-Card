import React from 'react';
import Card from './components/user/user-card';
import axios from 'axios';

import './App.css';
import FollowerList from './components/follower/follower-list';

class App extends React.Component {

  state = {
    users: {},
    followers: [],
    userText: 'LoganSorensen'
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/LoganSorensen`)
      .then(response => {
        console.log("User data", response)
        this.setState({users: response.data})
      })
      .catch(error => {
        console.log("The data was not returned", error)
      })
  }

  fetchFollowers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(response => {
        console.log("Follower data", response)
        this.setState({followers: response.data, userText: ''})
      })
      .catch(error => {
        console.log("The data was not returned", error)
      })
  }

  handleChanges = e => {
    this.setState({userText: e.target.value})
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state.users !== prevState.users) {
      axios 
      .get(`https://api.github.com/users/${this.state.userText}`)
      .then(response => {
        console.log("New user data", response)
        this.setState({users: response.data})
      })
      .catch(error => {
        console.log("The data was not returned", error)
      })
    }
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <input
        type='text'
        value={this.state.userText}
        onChange={this.handleChanges}
        />
        <button onClick={this.fetchFollowers}>Display Followers</button>
        <Card users={this.state.users} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
