import React, { Component } from "react";
import { createBrowserHistory } from "history";
 
class Contact extends Component {
  componentDidMount() {
    var page_name = "Contact Us"
    var page_title = "Contact Page";
    const history = createBrowserHistory();
    // let prevPath = null;
    console.log(history)
    const url = history.location.pathname+history.location.hash
    console.log(url)
    console.log(history.location.search)
    window.analytics.page(page_name,
      {
        title: page_title
      },
      {
        context:{
          page:{
            title: page_title,
            url: url,
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