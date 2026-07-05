import "./Login.css";

function Login() {
  return (
    <div className="auth-page">
      <form className="auth-form">
        <h1>Login</h1>

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;