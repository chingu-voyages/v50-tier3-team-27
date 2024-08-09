import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [ detailResult, setDetailResult ] = useState([]);
    const [ allPlants, setAllPlants ] = useState([])
    const navigate = useNavigate()
  
    const apiKey = import.meta.env.VITE_API_KEY;
  
    const handleSearch = async (event) => {
        event.preventDefault();
      try {
        const response = await fetch(`https://perenual.com/api/species-list?key=${apiKey}&q=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data.data)
        // setSearchTerm("");
        navigate("/results")
      } catch (e) {
        console.error("Error fetching data:", e);
        setSearchTerm("");
      }
    };

    const handleAllPlants = async () => {
      try {
        const response = await fetch(`https://perenual.com/api/species-list?key=${apiKey}&page=1`);
        const data = await response.json();
        setAllPlants(data.data)
        console.log(allPlants)
      } catch (e) {
        console.error("Error fetching data:", e);
      }
  };


    const handleDetail = async (id) => {
    try {
      const response = await fetch(`https://perenual.com/api/species/details/${id}?key=${apiKey}`);
      const data = await response.json();
      setDetailResult(data.data)
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

    return (
        <GlobalContext.Provider
        value = {{
            handleSearch,
            setSearchTerm,
            searchTerm,
            setSearchResults,
            searchResults,
            handleDetail,
            setDetailResult,
            detailResult,
            handleAllPlants,
            setAllPlants,
            allPlants
        }}>
        {children}
        </GlobalContext.Provider>
    )
}