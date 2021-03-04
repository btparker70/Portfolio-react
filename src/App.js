import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import friends from './friends.json';

class App extends React.Component {
  // state = {
  //   friends
  // }
  // removeFriend = id => {
  //   // write code to filter through friends array and return any 
  //   // object that does not have the id of the object that you clicked
  //   const friends = this.state.friends.filter(friends => friends.id !== id)
  //   this.setState({friends})
  // }
  render() {
  return (
<div>
      <Navbar />
      <Footer />
      </div>
  );
}
}

export default App;

