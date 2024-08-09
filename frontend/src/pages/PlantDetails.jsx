import { useParams } from "react-router-dom";
//import flowerDetails from "../dummyData";
import { useContext } from "react";
import { GlobalContext } from "../context";


const PlantDetails = () => {
    const { id } = useParams();
    // const plantId = parseInt(id, 10);
    const { handleDetail, detailResult } = useContext(GlobalContext);
    handleDetail(id)
    console.log(detailResult)
    const plant = detailResult

    return (
        <div>
            <div>
                <div>
                    <img src={plant?.imageUrl} alt={plant?.common_name} />
                </div>
                <h2>{plant?.common_name}</h2>
                <h3>{plant?.scientific_name}</h3>
                <p>{plant?.description}</p>
                <h4>Care Instructions</h4>
                <p><strong>Sunlight:</strong> {plant?.sunlight}</p>
                <p><strong>Watering:</strong> {plant?.watering}</p>
                <p><strong>Soil:</strong> {plant?.soil}</p>
                <p><strong>Propagation:</strong> {plant?.propagation}</p>
            </div>
        </div>
    );
};

export default PlantDetails;
