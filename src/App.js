import React, {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ResturantCard from "./components/ResturantCard";
import ErrorElement from "./components/ErrorElement";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import ResturantMenu from "./components/ResturantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout = () => {
  const [userInfo , setUserName] = useState();

  useEffect(()=>{
    const data = {
      name : "akash bhaskar"
    };
    setUserName(data.name)
  },[])


  return (
    <Provider store = {appStore}> 
    {/* //this is from redux */}
    <UserContext.Provider value={{logggedInUser : userInfo  , setUserName}}>
    <div className="app min-h-screen bg-[#f7f7f7]">
      <Header />

      <Outlet></Outlet>
    </div>
    </UserContext.Provider>
    {/* //this is from useContext */}
    </Provider>
    
  );
};
//chunnking
//code splitting//
//dynamic bundling 
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/Grocery",
        element:<Suspense fallback={
          <h1>fallback is called when some issue happens in grocery componet</h1>
        }><Grocery></Grocery></Suspense> 
      },
      {
        path: "resturant/:resId",
        element: <ResturantMenu></ResturantMenu>,
      },
      {
        path : "/cart",
        element: <Cart></Cart>
      }
    ],
    errorElement: <ErrorElement></ErrorElement>,
  },
]);

ReactDOM.createRoot(document.getElementById("root"))
.render(
  <RouterProvider router={AppRouter}></RouterProvider>,
);

// --------------------------------********-----------------------------------------------

// Changes made: added a neutral Swiggy-inspired application background without changing routing logic.
// React.createElement => reactElement - js Object=> render- to make it html Element

// React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is coming from heading 🏄‍♀️",
);

//jsx - transpilled to react.createElement() -- using parcel - babel
// Jsx is not html in javascript but its jsx - its html like element
//also babel convers es6 to lower verion for older broweres transpiller
// use () to wrap the jsx when we need to write in multiple lines then use ()

//jsx
const jsxHeading = (
  <h1 id="heading" className="root">
    Namaste react using JSX
  </h1>
);

// REact component
//class based components - old way
// fucnitonal components - new way of writing code
// componenet composition - putiing one component into another component

// rect funcitonal compoenet || react component
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1 id="heading">this is comming from functional component</h1>
    </div>
  );
};

function HeadingComponent3() {
  return (
    <div className="container">
      <h1 id="heading">this is comming from functional component</h1>
    </div>
  );
}

const Title = () => <h1 className="heading">Welcome to react </h1>;

// ReactDOM.createRoot(document.getElementById('root'))
// .render(heading)
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
// ReactDOM.createRoot(document.getElementById("root")).render(HeadingComponent());

//  <heading component/> -- babel understants that it is react component
// ReactDOM.createRoot(document.getElementById("root")).render(<HeadingComponent/>);

// --------------------------------********-----------------------------------------------

// --------------------------------********-----------------------------------------------

// eveything from down here is till episode 2
/**
 * <div id= "parent">
 *      <div id="child">
 *          <h1>i m h1 tag</h1>
 *          <h2>im h2</h2>
 *      </div>
 *
 *      <div id="child">
 *          <h1>i m h1 tag</h1>
 *          <h2>im h2</h2>
 *      </div>
 * <div>
 *
 * ReactElement(object) => HTML (browser unsersatnds)
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//  [ React.createElement("div", { id: "child" }, [
//     React.createElement("h2", {}, "this is namaste react"),
//     React.createElement("h1", {}, "i am h1 tag"),
//   ]),
//  React.createElement("div", { id: "child 2" }, [
//     React.createElement("h2", {}, "i am h2 tag"),
//     React.createElement("h1", {}, "i am h1 tag"),
//   ]),]
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from react",
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// Changes made: added a neutral Swiggy-inspired application background without changing routing logic.

// console.log(parent);
// // root.render(heading);
// root.render(parent);
// // this will replace existing root inpace of appending

// --------------------------------********-----------------------------------------------

// Changes made: added a neutral Swiggy-inspired application background without changing routing logic.
