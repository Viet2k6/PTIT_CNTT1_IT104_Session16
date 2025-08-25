import { Component } from "react";
type FormData = {
  name: string;
  email: string;
  age: string;
};

type State = {
  formData: FormData;
  error: string;
  submitted: boolean;
}

class UserForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        age: ""
      },
      error: "",
      submitted: false
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
      error: "",
      submitted: false
    }));
  };

  isValidEmail = (email: string): boolean => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = this.state;
    const ageNum = parseInt(formData.age);
    if (!this.isValidEmail(formData.email)) {
      this.setState({ error: "Email không hợp lệ" });
      return;
    }
    if (isNaN(ageNum) || ageNum < 0) {
      this.setState({ error: "Tuổi không được âm" });
      return;
    }
    this.setState({ error: "", submitted: true });
  };

  handleReset = () => {
    this.setState({
      formData: { name: "", email: "", age: "" },
      error: "",
      submitted: false
    });
  };

  render() {
    const { formData, error, submitted } = this.state;

    return (
      <div
        style={{
          maxWidth: 400,
          margin: "40px auto",
          textAlign: "center",
          fontFamily: "sans-serif"
        }}
      >
        <h2>Nhập thông tin người dùng</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            value={formData.name}
            onChange={this.handleChange}
            style={{ margin: 8, padding: 8, width: "100%", borderRadius: 4 }}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={this.handleChange}
            style={{ margin: 8, padding: 8, width: "100%", borderRadius: 4 }}
          />
          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={formData.age}
            onChange={this.handleChange}
            style={{ margin: 8, padding: 8, width: "100%", borderRadius: 4 }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div
            style={{
              marginTop: 12,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#146aecff",
                color: "white",
                padding: "8px",
                borderRadius: 4
              }}
            >
              Gửi
            </button>
            <button
              type="button"
              onClick={this.handleReset}
              style={{
                backgroundColor: "#146aecff",
                color: "white",
                padding: "8px",
                borderRadius: 4
              }}
            >
              Xóa tất cả
            </button>
          </div>
        </form>
        {submitted && (
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <h3>Thông tin đã nhập:</h3>
            <p>Họ tên: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Tuổi: {formData.age}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserForm;
