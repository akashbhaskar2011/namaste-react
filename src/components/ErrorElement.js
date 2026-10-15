import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops error occured</h1>
    </div>
  );
};

export default ErrorElement;
