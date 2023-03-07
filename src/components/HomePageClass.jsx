import React from "react";

import NavigationBar from "./NavigationBar";
import FooterBar from "./FooterBar";

export default class HomePage extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    document.title = "Home - TK Modern Auto Repair";
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) return null;
    else
      return (
        <div>
          <NavigationBar />
          <h1>HomePage</h1>
          <FooterBar />
        </div>
      );
  }
}
