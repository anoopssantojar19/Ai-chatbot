import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Welcome Back</h1>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;