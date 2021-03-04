import React from "react";

function Portfolio(props) {
  console.log(props)
  return (
    <div>
      <h1>Discover new Friends!</h1>
      <h3>Thumbs-up and pups you'd like to meet</h3>
      <img className="img-fluid" src={props.result.message} style={{ margin: "0 auto" }} />

      <h2>Made friends with {props.friendCount} pups so far!</h2>
    </div>
  )
}

export default Portfolio;