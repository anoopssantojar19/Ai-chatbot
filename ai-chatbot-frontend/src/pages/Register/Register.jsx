import "./Register.css";

function Register() {
  return (
    <div className="auth-page">
      <form className="auth-form">
        <h1>Create Account</h1>

        <input type="text" placeholder="Enter Name" />

        <input type="email" placeholder="Enter Email" />

        <input type="password" placeholder="Enter Password" />

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;