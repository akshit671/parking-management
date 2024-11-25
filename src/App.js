import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import ParkingSpace from './Components/ParkingSpace';
import { Navigate } from 'react-router-dom'; // Add this import

function App() {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if user is authenticated

  return (
    <div className="App">
      <Navbar />
      <SignUp />
      {isAuthenticated ? <ParkingSpace /> : <Navigate to="/login" />} {/* Conditional rendering */}
      <Footer />
    </div>
  );
}

export default App;
