import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//state variable - super powefrful variable
// whenever state of the variabe; cahnges , react triggers a reconcillation cycle , (re- rendering of the componenet)
const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);

  const [searchText , setSearchText] = useState("");

  const [filteredRresturantList , setFilteredResturant] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();

    setListOfResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setFilteredResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,)
  };

//   //conditional rendering 
//   if(listOfResturant.length === 0){
//     return <Shimmer/>
//   }

  return listOfResturant.length===0?(<Shimmer></Shimmer>):(
    <div className="body">

      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            // console.log(e.timeStamp)
            setSearchText(e.target.value)
          }}></input>
          <button onClick={()=>{
            console.log(listOfResturant)
            //filter the resturant cards and update the ui
            //search box
            const filteredList = listOfResturant.filter(
              (resData) => resData.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            // if(filteredList.length===0)return
            
            setFilteredResturant(filteredList);

          }}>search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (resData) => Number(resData.info.avgRating) > 4.4,
            );

            setListOfResturant(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      <div className="res-container">
  {filteredRresturantList.length === 0 ? (
    <h2>No restaurant found!</h2>
  ) : (
    filteredRresturantList.map((resData) => (
      <RestaurantCard key={resData.info.id} resData={resData.info} />
    ))
  )}
</div>
    </div>
  );
};
export default Body;
