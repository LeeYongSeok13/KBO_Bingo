import { Component } from "react";

class TopBanner extends Component {
  render() {
    return (
      <div className="Topbanner">
        <div className="container">
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopBanner;
