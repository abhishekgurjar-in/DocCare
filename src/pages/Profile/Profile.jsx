import React, { useEffect, useState } from "react";
import { db } from "../../Database/firebase"; // Import Firestore DB
import { doc, getDoc } from "firebase/firestore"; // Firestore functions
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Profile.css"; // Import the CSS for styling

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch user data from Firestore
  const fetchUserData = async (userID) => {
    const docRef = doc(db, "Users", userID); // Reference to the user's document in Firestore
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserDetails(docSnap.data()); // Set user details if document exists
      console.log(docSnap.data()); // Log data to console for debugging
    } else {
      console.log("No user document found");
    }
  };

  useEffect(() => {
    const userID = localStorage.getItem("userID"); // Get userID from localStorage
    if (userID) {
      fetchUserData(userID); // Fetch user data if userID exists
    } else {
      console.log("User is not logged in");
      navigate("/login"); // Redirect to login if no userID found
    }
  }, [navigate]); // Run effect on component mount

  // Handle logout
  async function handleLogout() {
    try {
      localStorage.removeItem("userID"); // Clear the userID from localStorage
      navigate("/login"); // Redirect to login after logout
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="profile-container">
      {userDetails ? (
        <div className="profile-content">
          {/* Left Side - User Details */}
          <div className="profile-left">
            <div className="profile-image">
              <img
                src={userDetails.photo || "https://via.placeholder.com/150"} // Fallback image if no photo
                alt="User Profile"
                className="profile-photo"
              />
            </div>
            <div className="profile-info">
              <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
              <p>Email: {userDetails.email}</p>
              <p>First Name: {userDetails.firstName}</p>
              <p>Last Name: {userDetails.lastName}</p>
              <p>Age: {userDetails.age}</p>
              <p>Blood Group: {userDetails.bloodGroup}</p>
              <p>Gender: {userDetails.gender}</p>
              <p>Phone Number: {userDetails.phoneNumber}</p>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>

          {/* Right Side - Additional Components */}
          <div className="profile-right">
            <h4>Account Actions</h4>
            <ul>
              <li><button>Edit Profile</button></li>
              <li><button>Customer Support</button></li>
              <li><button>Payments</button></li>
              <li><button>Transactions</button></li>
              <li><button>Returns Issue</button></li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
