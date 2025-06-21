import { react, useState } from "react";
import { Link } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email) {
      alert("Email is required");
      return;
    } 
    else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email is invalid.");
      setEmail("");
      return;
    }

    // Password validation
    if (!password) {
      alert("Password is required.");
      return;
    } 
    else if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      setPassword("");
      return;
    }
    
    // If all validations pass, proceed with login logic
    console.log("User logged in: ", { email, password });

    // Clearing the form fields after successful submission.
    setEmail("");
    setPassword("");
  };

  // Function to reset the form fields after submission
  const reloadForm = () => {
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <p>This is the login page.</p>
      <div className="container">
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="email" className="email" id="email">
            Email :
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="password" id="password">
            Password :
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" 
          onClick={reloadForm}>
            Login
          </button>
          <p>
            Don't have an account? <Link to="/">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
