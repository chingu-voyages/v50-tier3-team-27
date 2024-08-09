/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './PlantItem.css'

const PlantItem = ({ item }) => {
    console.log(item)
    return (
        <div className="plant-item-container">
            <div className="plant-item-image-container">
                <img src={item.default_image?.original_url} alt="plant item" className="plant-item-image" />
            </div>
            <div>
                <h2 className="plant-item-name">{item.common_name}</h2>
                 <Link
                    to={`/plants/${item.id}`}
                    className="plant-item-link"
                >
                    Plant Details
                </Link> 
            </div>
        </div>
    );
}

export default PlantItem;
