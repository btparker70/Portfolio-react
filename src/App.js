import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
// import friends from './friends.json';

class App extends React.Component {
  state = {
    currentPage: "Bio"
  }

  handlePageChange = page => {
    this.setState({ currentPage: page})
  };
  // removeFriend = id => {
  //   // write code to filter through friends array and return any
  //   // object that does not have the id of the object that you clicked
  //   const friends = this.state.friends.filter(friends => friends.id !== id)
  //   this.setState({friends})
  // }
  render() {
    return (
      <div>
        <Navbar 
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
        />
        <Wrapper>
          {(this.state.currentPage === "bio" && <Bio /> ) || 
        (this.state.currentPage === "portfolio" && <Portfolio friendCount={this.state.friendCount} result={this.state.resultDiscover}/>) || 
        (this.state.currentPage === "contact" && <Contact /> )}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
