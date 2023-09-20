import { Component } from "react";

import "./App.css";
import TopBanner from "./component/TopBanner";
import Header from "./component/Header";

class App extends Component {
  render() {
    return (
      <>
        <TopBanner />
        <Header />
      </>
    );
  }
}

export default App;
