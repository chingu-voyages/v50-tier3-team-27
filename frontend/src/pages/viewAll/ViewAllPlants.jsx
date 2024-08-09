import './ViewAllPlants.css'
import PlantItem from "../../components/PlantItem/PlantItem";
import { useContext } from "react";
import { GlobalContext } from "../../context";

const ViewAllPlants = () => {
    const { handleAllPlants, allPlants } = useContext(GlobalContext);
    handleAllPlants();
    return (
        <>
            <div className="results-container">
                {allPlants.map(item => (
                    <PlantItem key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default ViewAllPlants;