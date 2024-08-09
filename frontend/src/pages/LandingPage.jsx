import { useContext } from "react";
import { GlobalContext } from "../context";

const LandingPage = () => {
  const { searchTerm, setSearchTerm, handleSearch } = useContext(GlobalContext)
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
      <p></p>
    </>
  )
}

export default LandingPage;