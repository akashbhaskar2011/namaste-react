import { CDN_URL } from "../utils/constancts";
import { Link } from "react-router-dom";

const stylecard = {
  backgroundColor: "#ffffff",
};


const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(props);
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
   
      className="res-card group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={stylecard}
    >
      
      <Link to={"/resturant/"+id} className="res-link">
      <img
        className="h-48 w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4"><h3 className="truncate text-lg font-extrabold text-[#282c3f]">{name}</h3><h4 className="mt-1 truncate text-sm text-[#686b78]">{cuisines.join(", ")}</h4><div className="mt-3 flex items-center gap-2 text-sm font-bold text-[#535665]"><h4 className="rounded-md bg-[#48c479] px-2 py-1 text-xs text-white">★ {avgRating}</h4><span>•</span><h4>{sla.deliveryTime} mins</h4><span>•</span><h4>{costForTwo}</h4></div></div>
      </Link>
    </div>
  );
};


//higher order component

//input - returatnCard ==> resturantcardpromoted

export const withPromotedLabel =(RestaurantCard)=>{
  return (props) =>{
    return(
      <div className="relative">
        <label className="absolute left-3 top-3 z-10 rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg">
          Highly Loved ❤️
        </label>

        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;

// Changes made: converted restaurant cards into Swiggy-style image cards while preserving links and restaurant data.
