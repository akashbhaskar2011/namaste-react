import UserContext from "../utils/UserContext";
import UserClass from "./Userclass";
import User from "./Users";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent-constructor ")
  }
  componentDidMount() {
    // console.log("parent component did mount")
  }
  render() {
    // console.log("parent-render")
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#fc8019]">
            Our story
          </p>

          
          <h1 className="text-3xl font-extrabold text-[#282c3f]">About</h1>
          <h2 className="mt-3 text-lg font-medium text-[#686b78]">
            this is namaste react web series
          </h2>
         
          
          
          {/* <User name={"akash bhaskar (functional component)"}></User> */}
          <div className="mt-8">
            <UserClass name={"akash bhaskar (class component)"}></UserClass>
            <UserContext.Consumer>
  {(logggedInUser) => {
    console.log(logggedInUser);
    return <h1>{logggedInUser.logggedInUser}</h1>;
  }}
</UserContext.Consumer>
           
          </div>
        </div>
        {/* <UserClass name={"miku babu (class component)"}></UserClass> */}
       
      </div>
    );
  }
}

/*
REACT CLASS COMPONENT LIFECYCLE
(Parent: About, Children: UserClass)

1. Parent constructor
   -> Parent component is initialized.

2. Parent render
   -> Parent JSX is rendered.
   -> Child components are now created.

3. Child constructor - Akash
4. Child render - Akash

5. Child constructor - Miku
6. Child render - Miku

   -> React creates and renders both child components.
   -> Render happens before componentDidMount.

7. Child componentDidMount - Akash
8. Child componentDidMount - Miku

   -> Child components are mounted in the DOM.
   -> componentDidMount runs after rendering.

9. Parent componentDidMount

   -> Parent componentDidMount runs after
      its child components have mounted.

IMPORTANT:
- Constructor -> initializes the component.
- render() -> returns the JSX.
- componentDidMount() -> runs after mounting in the DOM.
- Parent renders before children.
- Children mount before the parent's componentDidMount().
*/

// const About = ()=> {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>this is namaste react web series</h2>
//             {/* <User name={"akash bhaskar (functional component)"}></User> */}
//             <UserClass name={"akash bhaskar (class component)"}></UserClass>
//         </div>
//     )
// }

// export default About;

export default About;

// Changes made: added a clean Swiggy-inspired informational page layout while retaining component behavior.
