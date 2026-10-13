import { CDN_URL } from "../utils/constancts";


const stylecard = {
  backgroundColor: "#322121",
};


const RestaurantCard = (props) => {
  const { resData } = props;
  
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  return (
    <div
   
      className="res-card"
      style={stylecard}
    >
      <img
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;