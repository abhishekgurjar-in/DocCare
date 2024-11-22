import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../Database/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import SignInWithGoogle from "../../components/GoogleAuth/SignInWithGoogle";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user details to Firestore
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
        age: age,
        bloodGroup: bloodGroup,
        gender: gender,
        phoneNumber: phoneNumber,
        photo: "", // Optional photo URL
      });

      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });

      // Redirect to login page after successful registration
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during registration:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleRegister} className="signup-form">
        <h3 className="signup-title">Sign Up</h3>

        <div className="input-field">
          <label className="input-label">First Name</label>
          <input
            type="text"
            className="input-box"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label className="input-label">Last Name</label>
          <input
            type="text"
            className="input-box"
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label className="input-label">Email Address</label>
          <input
            type="email"
            className="input-box"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label className="input-label">Password</label>
          <input
            type="password"
            className="input-box"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label className="input-label">Age</label>
          <input
            type="number"
            className="input-box"
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label className="input-label">Blood Group</label>
          <input
            type="text"
            className="input-box"
            placeholder="Enter blood group"
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label className="input-label">Gender</label>
          <select
            className="input-box"
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-field">
          <label className="input-label">Phone Number</label>
          <input
            type="text"
            className="input-box"
            placeholder="Enter phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="submit-button">
          <button type="submit" className="btn-submit">
            Sign Up
          </button>
        </div>

        <p className="redirect-link">
          Already registered?{" "}
          <a href="/login" className="link-to-login">
            Login
          </a>
        </p>
        {/* Google Sign-In */}
        <div className="google-sign-in">
          <button>
            <SignInWithGoogle />
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

export default Signup;
