import RestaurantCard,{withPromotedLabel} from "./ResturantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTURANTS } from "../utils/constancts";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


//state variable - super powefrful variable
// whenever state of the variabe; cahnges , react triggers a reconcillation cycle , (re- rendering of the componenet)

const Body = () => {

  const {logggedInUser, setUserName} = useContext(UserContext)
  const [listOfResturant, setListOfResturant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRresturantList, setFilteredResturant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  //if no dependecy array then useEffert is called on every render
  //if dependceny array is empty = [] => use effect is called only once when the intial renders happens
  //id sometihng is ther in the dependcy array , [btnNameReact]  then use effect is called everytime when the btnReact is upadtes/changes

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTURANTS);
    const json = await data.json();
console.log(json)
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfResturant(restaurants);
    setFilteredResturant(restaurants);
  };

  //   //conditional rendering
  // if(listOfResturant.length === 0){
  //   return <Shimmer/>
  // }

  // console.log(listOfResturant)

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1 className="mx-auto mt-20 max-w-xl rounded-2xl bg-white p-8 text-center text-xl font-bold text-[#3d4152] shadow-sm">Looks like you're offline. Please check your internet connection.</h1>;
  }

  return listOfResturant.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body mx-auto max-w-7xl px-4 py-8 text-[#282c3f] sm:px-6">
      <div className="mb-8"><p className="mb-1 text-sm font-bold uppercase tracking-[0.18em] text-[#fc8019]">Food delivery</p><h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Restaurants with online food delivery</h1></div>
      <div className="filter mb-8 flex flex-wrap items-center gap-3"
>
        <div className="search flex grow items-center gap-2 rounded-xl bg-white p-2 shadow-sm sm:max-w-xl">
          <input

            type="text"
            className="search-box min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[#282c3f] placeholder:text-gray-400 outline-none focus:border-[#fc8019] focus:ring-2 focus:ring-[#fc8019]/20"

            value={searchText}
            onChange={(e) => {
              // console.log(e.timeStamp)
              setSearchText(e.target.value);
            }}
          ></input>
          <button
         className="rounded-lg bg-[#fc8019] px-5 py-3 font-bold text-white transition hover:bg-[#e66f11]"

            onClick={() => {
              // console.log(listOfResturant);
              //filter the resturant cards and update the ui
              //search box
              const filteredList = listOfResturant.filter((resData) =>
                resData.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              // if(filteredList.length===0)return

              setFilteredResturant(filteredList);
            }}
          >
            search
          </button>

          
        </div>
        <button
          className="filter-btn rounded-lg border border-gray-300 bg-white px-5 py-3 font-bold text-[#3d4152] shadow-sm transition hover:border-[#fc8019] hover:text-[#fc8019]"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (resData) => Number(resData.info.avgRating) > 4.4,
            );

            setListOfResturant(filteredList);
          }}




          
        >
          Top rated Restaurant
        </button>

         <input

            type="text"
            className="search-box min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[#282c3f] placeholder:text-gray-400 outline-none focus:border-[#fc8019] focus:ring-2 focus:ring-[#fc8019]/20"

            value={logggedInUser}
            onChange={(e) => {
              // console.log(e.timeStamp)
              setUserName(e.target.value);
            }}
          ></input>
      </div>



      <div className="res-container grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {console.log(filteredRresturantList)}

  {filteredRresturantList.length === 0 ? (
    <h2 className="col-span-full py-10 text-center text-xl font-semibold text-[#3d4152]">
      No restaurant found!
    </h2>
  ) : (
    filteredRresturantList.map((resData) =>
      Number(resData.info.avgRating) > 4.5 ? (
        <RestaurantCardPromoted
          key={resData.info.id}
          resData={resData.info}
        />
      ) : (
        <RestaurantCard
          key={resData.info.id}
          resData={resData.info}
        />
      )
    )
  )}
</div>
    </div>
  );
};
export default Body;

// Changes made: added Swiggy-like discovery, search, filter, grid, and offline-state styles without changing data logic.
