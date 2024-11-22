import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Database/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignInwithGoogle from "../../components/GoogleAuth/SignInWithGoogle";
import "./Login.css"; // Import the login.css file

function Login() {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Firebase authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User logged in successfully");

      // Save user ID in localStorage
      localStorage.setItem("userID", user.uid);

      // Success toast notification
      toast.success("User logged in successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Redirect to the profile page
      window.location.href = "/profile";
    } catch (error) {
      console.error("Login Error: ", error.message);

      // Error toast notification
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h3 className="login-header">Login</h3>

        {/* Email Input */}
        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="input-field"
            required
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="input-field"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="submit-btn-container">
          <button type="submit" className="submit-btn">
            Login
          </button>
        </div>

        {/* New User Registration */}
        <p className="register-link">
          New user?{" "}
          <a href="/signup" className="register-link-text">
            Register Here
          </a>
        </p>

        {/* Google Sign-In */}
        <div className="google-sign-in">
          <button>
            <SignInwithGoogle />
            <img
              className="google-icon"
              src="https://freelogopng.com/images/all_img/1657955079google-icon-png.png"
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
