// Importing necessary modules and hooks
import React, { useState } from "react";
import data from "../../utils/data.json";

import "./HospitalSearch.css";

// Interface defining the structure of Hospital object
interface Hospital {
  name: string;
  address: string;
  coordinates: number[];
  country: string;
  phone: string;
  email: string;
  opening_hours: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
}

// Component for Hospital Search functionality
function HospitalSearch(): JSX.Element {
  // State variables for managing search term, search results, and selected hospitals
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Hospital[]>([]);
  const [selectedHospitals, setSelectedHospitals] = useState<Hospital[]>([]);


  // Function to handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    setSearchTerm(value);

    const filteredData: Hospital[] = data.data.filter((hospital: Hospital) => {
      return (
        hospital.name.toLowerCase().includes(value.toLowerCase()) ||
        hospital.email.toLowerCase().includes(value.toLowerCase())
      );
    });

    setSearchResults(filteredData);
  };

  // Function to handle click on a hospital in search results
  const handleHospitalClick = (hospital: Hospital): void => {
    setSelectedHospitals((prevHospitals) => [...prevHospitals, hospital]);
    setSearchResults([]); // Clear the search results
    setSearchTerm(hospital.name); // Update input field with selected hospital name
  };

  // Function to handle search button click
  const handleSearchButtonClick = (): void => {
    if (searchResults.length > 0) {
      setSelectedHospitals([searchResults[0]]);
      setSearchTerm(""); // Clear search term after selection
    }
  };


  // Rendering the JSX elements
  return (
    <div className="Ctn">
      <div className="search">
        {/* Hospital search input */}
        <input
          type="search"
          placeholder="Search hospital by name or location..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* Search results */}
        <ul className="search-results">
          {searchResults.map((hospital, index) => (
            <li
              key={index}
              onClick={() => handleHospitalClick(hospital)}
              data-testid={`hospital-result-${hospital.name.replace(
                /\s+/g,
                "-"
              )}`}
            >
              Name: {hospital.name}
            </li>
          ))}
        </ul>
        {/* Enter button */}
        <button className="E-btn" onClick={handleSearchButtonClick}>
          Enter
        </button>
      </div>
      <div className="details-h">
        {/* Display selected hospitals' details */}
        {selectedHospitals.map((hospital, index) => (
          <div className="hospital-details" key={index}>
            <h2>Hospital Details</h2>
            <p>
              <strong>Name:</strong> {hospital.name}
            </p>
            <p>
              <strong>Address:</strong> {hospital.address}
            </p>
            <p>
              <strong>Country:</strong> {hospital.country}
            </p>
            <p>
              <strong>Phone:</strong> {hospital.phone}
            </p>
            <p>
              <strong>Email:</strong> {hospital.email}
            </p>
            <p>
              <strong>Opening Hours:</strong>
            </p>
            <ul>
              {Object.entries(hospital.opening_hours).map(([day, hours]) => (
                <li key={day}>
                  <strong>{day}:</strong> {hours}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalSearch;
