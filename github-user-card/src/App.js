import React from 'react';
import Card from './components/user/user-card';
import axios from 'axios';

import './App.css';
import FollowerList from './components/follower/follower-list';

class App extends React.Component {

  state = {
    users: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/LoganSorensen')
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
      .get('https://api.github.com/users/LoganSorensen/followers')
      .then(response => {
        console.log("Follower data", response)
        this.setState({followers: response.data})
      })
      .catch(error => {
        console.log("The data was not returned", error)
      })
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <Card users={this.state.users} />
        <button onClick={this.fetchFollowers}>Display Followers</button>
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
