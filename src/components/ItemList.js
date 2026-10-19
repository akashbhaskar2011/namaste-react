const ItemList = ({ items }) => {
  return (
    <div>
      {items?.map((item) => {
        const dish = item.card?.info;

        if (!dish) return null;

        const price = dish.price ?? dish.defaultPrice;

        return (
          <div
            className="dish flex items-start justify-between gap-4 border-b border-dashed border-gray-300 px-2 py-6 last:border-b-0 sm:px-4"
            key={dish.id}
          >
            <div className="dish-info min-w-0 flex-1 pt-1">
              <h3 className="mb-2 text-base font-semibold leading-6 text-gray-800">
                {dish.name}
              </h3>

              <p className="mb-2 text-sm font-semibold text-gray-800">
                {price != null
                  ? `₹${(price / 100).toFixed(0)}`
                  : "Price unavailable"}
              </p>

              {dish.description && (
                <p className="description line-clamp-3 text-sm leading-5 text-gray-500">
                  {dish.description}
                </p>
              )}
            </div>

            <div className="dish-image relative flex w-28 shrink-0 flex-col items-center sm:w-36">
              {dish.imageId && (
                <img
                  className="h-24 w-28 rounded-xl object-cover sm:h-28 sm:w-36"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${dish.imageId}`}
                  alt={dish.name}
                />
              )}

              <button className="relative -mt-4 min-w-24 rounded-lg border border-[#fc8019] bg-white px-5 py-2 text-sm font-extrabold text-[#fc8019] shadow-md transition hover:bg-[#fff0e6] active:scale-95">
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;