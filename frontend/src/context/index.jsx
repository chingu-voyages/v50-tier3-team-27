import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
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

    return (
        <GlobalContext.Provider
        value = {{
            setSearchTerm,
            searchTerm,
            setSearchResults,
            searchResults,
            handleSearch
        }}>
        {children}
        </GlobalContext.Provider>
    )
}