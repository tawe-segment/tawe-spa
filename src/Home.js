import React, { Component } from "react";
import { createBrowserHistory } from "history";
 
class Home extends Component {
  componentDidMount() {
    var page_name = "Home"
    var page_title = "Main Home Page";
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
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}
 
export default Home;