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

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "i am h2 tag"),
    React.createElement("h1", {}, "i am h1 tag"),
  ]),
 React.createElement("div", { id: "child 2" }, [
    React.createElement("h2", {}, "i am h2 tag"),
    React.createElement("h1", {}, "i am h1 tag"),
  ]),]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react",
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);
// root.render(heading);
root.render(parent);
// this will replace existing root inpace of appending

