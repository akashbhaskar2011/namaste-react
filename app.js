import React from "react";
import ReactDOM from "react-dom/client";

/*
header
  logo
  navitems 
body
  search 
  resturant container
    resturant cards
      img
      name of item , star rtings , cuisines etc
footer
  copyright
  links
  address
  footer

*/

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>about us</a>
          </li>
          <li>
            <a>contact</a>
          </li>
          <li>
            <a>cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const stylecard = {
  backgroundColor: "#302020",
};

const ResturantCard = (props) => {
  const { resname, cuisine, rating, delivertime, costforTwo } = props.resdata;
  return (
    <div className="res-card" style={stylecard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bs9qgsy25pn07pzn6xx1"
      ></img>
      <h3> {resname}</h3>
      <h5>{cuisine}</h5>
      <h5>{rating}</h5>
      <h5>{delivertime}</h5>
      <h5>{costforTwo}</h5>
    </div>
  );
};

const resData = [
  {
    resname: "Meghana Foods",
    cuisine: "Biryani, Andhra, North Indian",
    rating: "4.4 stars",
    delivertime: "38 mins",
    costforTwo: "₹400 for two",
  },
  {
    resname: "Empire Restaurant",
    cuisine: "North Indian, Chinese, Kebabs",
    rating: "4.2 stars",
    delivertime: "30 mins",
    costforTwo: "₹350 for two",
  },
  {
    resname: "A2B - Adyar Ananda Bhavan",
    cuisine: "South Indian, Sweets, Snacks",
    rating: "4.3 stars",
    delivertime: "25 mins",
    costforTwo: "₹200 for two",
  },
  {
    resname: "Truffles",
    cuisine: "American, Burgers, Italian",
    rating: "4.5 stars",
    delivertime: "35 mins",
    costforTwo: "₹450 for two",
  },
  {
    resname: "Pizza Hut",
    cuisine: "Pizzas, Italian, Fast Food",
    rating: "4.1 stars",
    delivertime: "28 mins",
    costforTwo: "₹300 for two",
  },
];

const Body = () => {
  return (
    <div className="body">

      <div className="search">Search</div>


      <div className="res-container">
        {/* //resturantcard */}
        {/* <ResturantCard resname="meghna food" 
          cuisine ="biryani , north indian" /> */}
        {/* <ResturantCard resData ={reData}></ResturantCard>
         */}
        {resData.map((resdata) => (
          <ResturantCard key={resdata.resname} resdata={resdata} />
        ))}


      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* body */}
      <Body />
      {/* footer */}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);

// --------------------------------********-----------------------------------------------
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

// console.log(parent);
// // root.render(heading);
// root.render(parent);
// // this will replace existing root inpace of appending

// --------------------------------********-----------------------------------------------
