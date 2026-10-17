import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="mx-auto mt-20 max-w-xl px-4 text-center">
      <div className="rounded-3xl bg-white p-10 shadow-sm"><p className="text-5xl">🍽️</p><h1 className="mt-5 text-3xl font-extrabold text-[#282c3f]">Oops, error occurred</h1><p className="mt-3 text-[#686b78]">We could not serve this page right now. Please try again.</p></div>
    </div>
  );
};

export default ErrorElement;

// Changes made: styled the existing route error display as a friendly Swiggy-inspired error card.
