import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="container">
          <h1>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "./image/logo.jpg"}
                alt="KBO_Bingo"
              ></img>
            </a>
          </h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
