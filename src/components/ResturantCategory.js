import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ category  , showItems , setShowIndex}) => {
//   const [showItems, setShowItems] = useState(showItem);

  const isNestedCategory = category.categories?.length > 0;

  return (
    <div className="category mb-5 overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Accordion Header */}
      <button
        className="flex w-full items-center justify-between bg-gray-50 px-4 py-4 text-left transition hover:bg-gray-100"
       onClick={setShowIndex
        
       }
      >
        <span className="text-lg font-bold text-gray-800">
          {category.title}

          <span className="ml-2 text-sm font-normal text-gray-500">
            (
            {isNestedCategory
              ? category.categories.length
              : category.itemCards?.length || 0}
            )
          </span>
        </span>

        <span className="text-xl font-bold text-[#fc8019]">
          {showItems ? "⌃" : "⌄"}
        </span>
      </button>

      {/* Accordion Body */}
      {showItems && (
        <div className="px-2 py-3 sm:px-4">
          {/* Nested Categories */}
          {isNestedCategory &&
            category.categories.map((nestedCategory) => (
              <ResturantCategory
                key={
                  nestedCategory.categoryId || nestedCategory.title
                }
                category={nestedCategory}
              />
            ))}

          {/* Actual Dishes */}
          {!isNestedCategory && (
            <ItemList items={
                category.itemCards
            
            } />
          )}
        </div>
      )}
    </div>
  );
};

export default ResturantCategory;