import NavBar from "../components/Navbar/Navbar";

import LoginForm from "../components/LoginForm.js/LoginForm";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
