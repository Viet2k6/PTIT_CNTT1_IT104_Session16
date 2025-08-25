import ClickCounter from "./component/ClickCounter";
import SubjectList from "./component/SubjectList";
import Button from "./component/Button";
import LoginStatus from "./component/LoginStatus";
import UserForm from "./component/UserForm";
import ThemeSwitcher from "./component/ThemeSwitcher";
import ShoppingCart from "./component/Ex07_08";

function App() {
  return (
    <>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <SubjectList />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <LoginStatus />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Button />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <ClickCounter />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <UserForm />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <ThemeSwitcher />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <ShoppingCart />
      </div>
    </>
  );
}

export default App;
