import  { Component } from "react";
type State = {
  isLoggedIn: boolean;
};

class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif"}}>
        <h2>
          {isLoggedIn
            ? "✅ Xin chào, User!"
            : "🔒 Vui lòng đăng nhập để tiếp tục."}
        </h2>
        <button
          onClick={this.toggleLogin}
          style={{padding: "10px", fontSize: "15px", borderRadius: "6px", border: "none", backgroundColor:"#007bff",color: "white"}}
        >
          {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}

export default LoginStatus;
