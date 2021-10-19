import React, { Component } from "react";
import { createBrowserHistory } from "history";
 
class Stuff extends Component {
  componentDidMount() {
    var page_name = "Stuff"
    var page_title = "Some Stuff Page";
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
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;