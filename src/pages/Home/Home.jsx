import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Database/firebase"; // Firebase DB import
import { collection, getDocs } from "firebase/firestore"; // Firestore functions
import "./Home.css"; // Import CSS for styling

function Home() {
  const [userDetails, setUserDetails] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const navigate = useNavigate();

  // Fetch user data
  const fetchUserData = async () => {
    const userID = localStorage.getItem("userID"); // Get userID from localStorage
    if (userID) {
      // Simulating user data fetch from Firestore or other source
      const userData = {
        firstName: "John",
        lastName: "Doe",
      };
      setUserDetails(userData);
    } else {
      navigate("/login"); // Redirect to login if no userID found
    }
  };

  // Fetch doctor data from Firestore
  const fetchDoctors = async () => {
    const querySnapshot = await getDocs(collection(db, "Doctors"));
    const doctorsList = [];
    querySnapshot.forEach((doc) => {
      doctorsList.push(doc.data());
    });
    setDoctors(doctorsList);
    setFilteredDoctors(doctorsList); // Initial doctor list without filter
  };

  // Handle Search and Filters
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSpecialtyChange = (event) => {
    setSpecialtyFilter(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  useEffect(() => {
    fetchUserData();
    fetchDoctors();
  }, []);

  useEffect(() => {
    let filteredList = doctors.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        doctor.specialty.toLowerCase().includes(specialtyFilter.toLowerCase()) &&
        doctor.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    });
    setFilteredDoctors(filteredList);
  }, [searchTerm, specialtyFilter, locationFilter, doctors]);

  return (
    <div className="home-container">
      <div className="welcome-message">
        {userDetails ? (
          <h1>Welcome, {userDetails.firstName} 👋</h1>
        ) : (
          <h1>Welcome to DocCare</h1>
        )}
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search doctors by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select onChange={handleSpecialtyChange} value={specialtyFilter}>
          <option value="">Specialty</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Pediatrics">Pediatrics</option>
          {/* Add more specialties */}
        </select>
        <select onChange={handleLocationChange} value={locationFilter}>
          <option value="">Location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          {/* Add more locations */}
        </select>
      </div>

      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-image">
                <img
                  src={doctor.photo || "https://via.placeholder.com/150"}
                  alt={doctor.name}
                  className="doctor-photo"
                />
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>Specialty: {doctor.specialty}</p>
                <p>Location: {doctor.location}</p>
                <button>Book Appointment</button>
              </div>
            </div>
          ))
        ) : (
          <p>No doctors found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
