import React from "react";
import { Input, FormBtn } from "../components/Form";

function Contact() {
  return (
    <div>
      <main class="container">
          {/* <!--Header--> */}
          <div class="row">
              <div class="col-lg-12">
                  <h1>Contact</h1>
                  
              </div>
          </div>
          {/* <!--Form--> */}
          <div class="row">
              <div class="col-lg-12">
                <form>
                <label forhtml="name">Name:</label>
                  <Input type="text" id="name" name="name" placeholder="Name"/>
                <label forhtml="email">Email:</label>
                  <Input type="text" id="email" name="email" placeholder="Email"/>
                <label forhtml="comment">Comment:</label>
                  <Input type="text" id="comment" name="comment" placeholder="Comment"/>
                  <FormBtn >Submit</FormBtn>
                </form>
              </div>
          </div>
          
      </main>
    </div>
  )
}

export default Contact;