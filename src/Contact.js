import React, { Component } from "react";
 
class Contact extends Component {

  componentDidMount() {
    var page_name = "Contact Us"
    var page_title = "Contact Page";
    var url = window.location.href;
    var referrer = window.history.pushState({ prevUrl: window.location.href }, null, "/contact");
    window.analytics.page(page_name,
      {
        title: page_title
      },
      {
        context:{
          page:{
            title: page_title,
            url: url,
            referrer: referrer,
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