import PlantItem from "../../components/PlantItem/PlantItem";
import flowerDetails from "../../dummyData";
import './Results.css'


const Results = () => {
    return (
        <>
            <h3 className="results-title">Results for ..</h3>
            <div className="results-container">
                {flowerDetails.map(item => (
                    <PlantItem key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default Results;