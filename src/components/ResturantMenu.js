// i used gpt to add more things to my existing  code

// i used gpt to add more things to my existing  code

import Shimmer from "./Shimmer";
import "./ResturantMenu.css";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) {
    return <Shimmer />;
  }
  // let showIndex=4;

  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;

  const itemCards =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  // console.log(itemCards)

  const menuCategories = itemCards
    .map((item) => item.card?.card)
    .filter((card) => card?.["@type"]?.includes("ItemCategory"));

  // console.log(menuCategories)

  return (
    <div className="menu mx-auto min-h-screen max-w-5xl bg-[#f7f7f7] px-4 py-8 text-gray-800 sm:px-8">
      <div className="rounded-2xl border-b border-gray-200 bg-white p-6 pb-6 shadow-sm">
        <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {name}
        </h1>

        <p className="mb-2 text-sm text-gray-500">{cuisines.join(", ")}</p>

        <p className="text-sm font-semibold text-gray-700">
          {costForTwoMessage}
        </p>
      </div>

      <h2 className="menu-heading py-8 text-center text-xl font-extrabold uppercase tracking-[0.2em] text-[#282c3f]">
        Menu
      </h2>

      {menuCategories.map((category, index) => (
        //controlled component
        <ResturantCategory
          key={category.categoryId || category.title}
          category={category}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(showIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;

// i used gpt to add more things to my existing  code

// import Shimmer from "./Shimmer";
// import "./ResturantMenu.css";
// import { useParams } from "react-router-dom";
// import useResturantMenu from "../utils/useResturantMenu";

// const ResturantMenu = () => {
//   const { resId } = useParams();
//   // console.log(resId);
//   const resInfo = useResturantMenu(resId);

//   if (resInfo === null) {
//     return <Shimmer />;
//   }

//   const { name, cuisines, costForTwoMessage } =
//     resInfo.data.cards[2].card.card.info;

//   const itemCards =
//     resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

//   const menuCategories = itemCards
//     .map((item) => item.card?.card)
//     .filter((card) => card?.["@type"]?.includes("ItemCategory"));

//   return (
//     <div className="menu mx-auto min-h-screen max-w-5xl bg-[#f7f7f7] px-4 py-8 text-gray-800 sm:px-8">
//       <div className="rounded-2xl border-b border-gray-200 bg-white p-6 pb-6 shadow-sm">
//         <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//           {name}
//         </h1>

//         <p className="mb-2 text-sm text-gray-500">
//           {cuisines.join(", ")}
//         </p>

//         <p className="text-sm font-semibold text-gray-700">
//           {costForTwoMessage}
//         </p>
//       </div>

//       <h2 className="menu-heading py-8 text-center text-xl font-extrabold uppercase tracking-[0.2em] text-[#282c3f]">
//         Menu
//       </h2>

//       {menuCategories.map((category) => (
//         <div
//           className="category mb-5 overflow-hidden rounded-2xl bg-white px-0 py-2 shadow-sm"
//           key={category.categoryId || category.title}
//         >
//           <h2 className="mb-2 bg-gray-50 px-4 py-4 text-lg font-bold text-gray-800">
//             {category.title}
//           </h2>

//           {category.itemCards?.map((item) => {
//             const dish = item.card.info;
//             const price = dish.price ?? dish.defaultPrice;

//             return (
//               <div
//                 className="dish flex items-start justify-between gap-4 border-b border-dashed border-gray-300 px-2 py-6 last:border-b-0 sm:px-4"
//                 key={dish.id}
//               >
//                 <div className="dish-info min-w-0 flex-1 pt-1">
//                   <h3 className="mb-2 text-base font-semibold leading-6 text-gray-800">
//                     {dish.name}
//                   </h3>

//                   <p className="mb-2 text-sm font-semibold text-gray-800">
//                     {price != null
//                       ? `₹${(price / 100).toFixed(0)}`
//                       : "Price unavailable"}
//                   </p>

//                   {dish.description && (
//                     <p className="description line-clamp-3 text-sm leading-5 text-gray-500">
//                       {dish.description}
//                     </p>
//                   )}
//                 </div>

//                 <div className="dish-image relative flex w-28 shrink-0 flex-col items-center sm:w-36">
//                   {dish.imageId && (
//                     <img
//                       className="h-24 w-28 rounded-xl object-cover sm:h-28 sm:w-36"
//                       src={`https://media-assets.swiggy.com/swiggy/image/upload/${dish.imageId}`}
//                       alt={dish.name}
//                     />
//                   )}

//                   <button className="relative -mt-4 min-w-24 rounded-lg border border-[#fc8019] bg-white px-5 py-2 text-sm font-extrabold text-[#fc8019] shadow-md transition hover:bg-[#fff0e6] active:scale-95">
//                     ADD +
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResturantMenu;

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

// Changes made: refined the existing menu screen with Swiggy-style spacing, cards, and orange action accents; menu data logic is unchanged.
