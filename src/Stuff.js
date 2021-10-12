import React, { Component } from "react";
 
class Stuff extends Component {
  componentDidMount() {
    var page_name = "Stuff"
    var page_title = "Some Stuff Page";
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