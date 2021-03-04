import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
// import friends from './friends.json';

class App extends React.Component {
  state = {
    currentTab: ""
  }
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
        <Wrapper>
          <Bio />
          <Contact />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
