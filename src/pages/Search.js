import React from "react";

function Contact() {
  return (
    <div>
      <h1>Search a Breed!</h1>
      <form className="search">
        <div className="form-group">
          <label for="breed">Breed Name:</label>
          <input type="text" name="breed" list="breeds" class="form-control" placeholder="Type in a dog breed to begin" id="breed"></input>
        </div>
      </form>
    </div>
  )
}

export default Contact;