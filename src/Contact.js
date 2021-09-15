import React, { Component } from "react";
 
class Contact extends Component {
  componentDidMount() {
    window.analytics.page('Contact');
  }
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is to 
          submit a <a href="https://segment.com/docs/help/">ticket</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;