import React, { Component } from "react";
 
class Contact extends Component {

  componentDidMount() {
    var page_name = "Contact Us"
    var page_title = "Contact Page";
    window.analytics.page(page_name,
      {
        title: page_title
      },
      {
        context:{
          page:{
            title: page_title,
          }
        }
      });
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