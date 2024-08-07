import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://perenual.com/api/species-list?key=${apiKey}&q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.data)
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };


  return (
    <>
      <h1> Welcome to the Plant Manager! </h1>
      <img src="./images/plants_thumbsup.jpg" alt="plant_photo"></img>
      <p></p>

      <div className="search-bar-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a plant..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="grid-container">
        <div>Add Plants to your Collection</div>
        <div>Get Care Information</div>
        <div>See Plant Species</div>
        <div>Find Out What Species Your Plant Attracts</div>
      </div>
    </>
  )
}

export default LandingPage;