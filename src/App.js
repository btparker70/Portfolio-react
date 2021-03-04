import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

class App extends React.Component {
  state = {
    currentPage: "Bio"
  }

  handlePageChange = page => {
    this.setState({ currentPage: page})
  };

  render() {
    return (
      <div>
        <Navbar 
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
        />
        <Wrapper>
          {(this.state.currentPage === "bio" && <Bio /> ) || 
        (this.state.currentPage === "portfolio" && <Portfolio/>) || 
        (this.state.currentPage === "contact" && <Contact /> )}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
