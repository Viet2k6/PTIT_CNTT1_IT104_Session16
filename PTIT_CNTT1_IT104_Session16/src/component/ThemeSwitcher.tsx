import { Component } from "react";
type State = {
  isDarkMode: boolean;
}

class ThemeSwitcher extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    const containerStyle: React.CSSProperties = {
      padding: "40px",
      textAlign: "center",
      fontFamily: "sans-serif",
      color: isDarkMode ? "white" : "black",
      backgroundColor: isDarkMode ? "#111111" : "#ffffff",
      borderRadius: 8,
      transition: "all 0.3s ease"
    };

    const buttonStyle: React.CSSProperties = {
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#146aec",
      color: "white",
      border: "none",
      borderRadius: 4
    };

    return (
      <div style={containerStyle}>
        <h2>{isDarkMode ? "🌙 Chế độ Tối đang bật" : "☀️ Chế độ Sáng đang bật"}</h2>
        <button onClick={this.toggleTheme} style={buttonStyle}>
          Chuyển theme
        </button>
      </div>
    );
  }
}

export default ThemeSwitcher;
