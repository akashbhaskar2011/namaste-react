import { CDN_URL } from "../utils/constancts";
import { Link } from "react-router-dom";

const stylecard = {
  backgroundColor: "#322121",
};


const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(props);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    id
  } = resData;

  return (
    <div
   
      className="res-card"
      style={stylecard}
    >
      
      <Link to={"/resturant/"+id} className="res-link">
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;