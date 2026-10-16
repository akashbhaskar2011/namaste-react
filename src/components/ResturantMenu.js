// i used gpt to add more things to my existing  code

import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constancts";
import Shimmer from "./Shimmer";
import "./ResturantMenu.css";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(MENU_URL + resId);
      const json = await response.json();
      setResInfo(json);
    };

    fetchMenu();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;

  const itemCards =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  const menuCategories = itemCards
    .map((item) => item.card?.card)
    .filter((card) => card?.["@type"]?.includes("ItemCategory"));

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>

      <h2 className="menu-heading">Menu</h2>

      {menuCategories.map((category) => (
        <div className="category" key={category.categoryId || category.title}>
          <h2>{category.title}</h2>

          {category.itemCards?.map((item) => {
            const dish = item.card.info;
            const price = dish.price ?? dish.defaultPrice;

            return (
              <div className="dish" key={dish.id}>
                <div className="dish-info">
                  <h3>{dish.name}</h3>

                  <p>
                    {price != null
                      ? `₹${(price / 100).toFixed(0)}`
                      : "Price unavailable"}
                  </p>

                  {dish.description && (
                    <p className="description">{dish.description}</p>
                  )}
                </div>

                <div className="dish-image">
                  {dish.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${dish.imageId}`}
                      alt={dish.name}
                    />
                  )}

                  <button>ADD +</button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ResturantMenu;

// below this was my code
// import { useEffect, useState } from "react";
// import { MENU_URL } from "../utils/constancts";
// import Shimmer from "./Shimmer";
// const ResturantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const responseData = await fetch(MENU_URL);

//     const json = await responseData.json();
//     console.log(json);
//     setResInfo(json);
//   };

//   if (resInfo === null) {
//     return <Shimmer />;
//   }

//   const itemCards = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

//   const menuCategories = itemCards
//     .map((item) => item.card?.card)
//     .filter((card) => card?.["@type"]?.includes("ItemCategory"));

//   console.log(itemCards);

//   const { name, cuisines, costForTwoMessage } =
//     resInfo.data.cards[2].card.card.info;
//   return resInfo === null ? (
//     <Shimmer></Shimmer>
//   ) : (
//     <div className="menu">
//       <h1></h1>
//       {/* <h2>menu</h2> */}
//       <ul>
//         <li>{name}</li>
//         <li>{cuisines.join(", ")}</li>
//         <li>{costForTwoMessage}</li>
//       </ul>

//       <div className="menu">
//         {menuCategories.map((category) => (
//           <div key={category.categoryId || category.title}>
//             <ul>
//             <li><h2>{category.title}</h2></li>
//             </ul>

//             {category.itemCards?.map((item) => (
//               <p key={item.card.info.id}>{item.card.info.name}</p>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResturantMenu;
