import { react, useState } from "react";
import { Link } from "react-router";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email) {
      toast.warn("Email is required.");
      return;
    } 
    else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Email is invalid.");
      setEmail("");
      return;
    }

    // Password validation
    if (!password) {
      toast.warn("Password is required.");
      return;
    } 
    else if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      setPassword("");
      return;
    }
    
    // If all validations pass, proceed with login logic
    console.log("User logged in: ", { email, password });
    toast.success("Login successful.");

    // Clearing the form fields after successful submission.
    setEmail("");
    setPassword("");
  };

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
          />

          <label htmlFor="password" className="password" id="password">
            Password :
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>
          <ToastContainer position="top-right" autoClose={5000}></ToastContainer>
          <p>
            Don't have an account? <Link to="/">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
