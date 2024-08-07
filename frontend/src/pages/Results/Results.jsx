import PlantItem from "../../components/PlantItem/PlantItem";
import flowerDetails from "../../dummyData";
import './Results.css'
import { useContext } from "react";
import { GlobalContext } from "../../context";


const Results = () => {
    const { searchResults, searchTerm } = useContext(GlobalContext);
    console.log(searchResults)
    return (
        <>
            <h3 className="results-title">Results for { searchTerm }</h3>
            <div className="results-container">
                {searchResults.map(item => (
                    <PlantItem key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default Results;