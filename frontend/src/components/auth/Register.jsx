import { react, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (!name) {
      toast.warn("Name is required.");
      return;
    }

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

    // Confirm Password validation
    if (!confirmPassword) {
      aletoast.warn("Confirm Password is required.");
      return;
    } 
    else if (confirmPassword.length < 6) {
      toast.error("Confirm Password must be at least 6 characters long.");
      setConfirmPassword("");
      return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    // If all validations pass, proceed with registration logic
    console.log("User registered:", { name, email, password, confirmPassword });
    toast.success("Registration successful!");

    // Clearing the form fields after successful submission.
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <p>This is the register page.</p>
      <div className="container">
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="name" className="name" id="name">
            Full Name :
          </label>
          <input
            type="name"
            placeholder=" Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" className="email" id="email">
            Email :
          </label>
          <input
            type="email"
            placeholder=" Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="password" id="password">
            Password :
          </label>
          <input
            type="password"
            placeholder=" Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="password1" className="password1" id="password">
            Confirm Password :
          </label>
          <input
            type="password"
            placeholder=" Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>
          <ToastContainer position="top-right" autoClose={5000}></ToastContainer>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
