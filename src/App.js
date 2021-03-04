import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
// import friends from './friends.json';

class App extends React.Component {
  state = {
    friends
  }
  removeFriend = id => {
    // write code to filter through friends array and return any 
    // object that does not have the id of the object that you clicked
    const friends = this.state.friends.filter(friends => friends.id !== id)
    this.setState({friends})
  }
  render() {
  return (
    // use {map} to render one card for each object in the array
    <Wrapper>
      <Title>Friends List</Title>
      {this.state.friends.map(friend => (
      <FriendCard
      // we need more lines to keep track of the id(key) and a method to execute removeFriend
        key={friend.id}
        id={friend.id}
        removeFriend = {this.removeFriend}
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
      />
      ))}
    </Wrapper>
  );
}
}

export default App;

