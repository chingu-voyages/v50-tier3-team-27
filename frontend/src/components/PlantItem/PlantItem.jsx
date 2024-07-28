/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './PlantItem.css'

const PlantItem = ({ item }) => {
    // console.log('ITEM: ', item);
    return (
        <div className="plant-item-container">
            <div className="plant-item-image-container">
                <img src={item?.imageUrl} alt="plant item" className="plant-item-image" />
            </div>
            <div>
                <h2 className="plant-item-name">{item.name}</h2>
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
