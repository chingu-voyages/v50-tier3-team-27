import { useParams } from "react-router-dom";
import flowerDetails from "../dummyData";


const PlantDetails = () => {
    const { id } = useParams();
    const plantId = parseInt(id, 10);
    const plant = flowerDetails.find(item => item.id === plantId);


    return (
        <div>
            <div>
                <div>
                    <img src={plant?.imageUrl} alt={plant?.name} />
                </div>
                <h2>{plant?.name}</h2>
                <h3>{plant?.scientificName}</h3>
                <p>{plant?.description}</p>
                <h4>Care Instructions</h4>
                <p><strong>Sunlight:</strong> {plant?.careInstructions?.sunlight}</p>
                <p><strong>Watering:</strong> {plant?.careInstructions?.watering}</p>
                <p><strong>Soil:</strong> {plant?.careInstructions?.soil}</p>
                <p><strong>Fertilization:</strong> {plant?.careInstructions?.fertilization}</p>
            </div>
        </div>
    );
};

export default PlantDetails;
