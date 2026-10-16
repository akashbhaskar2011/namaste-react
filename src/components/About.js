import UserClass from "./Userclass";
import User from "./Users";
import React from "react";

class About extends React.Component {

    constructor(props){
        super(props);

        // console.log("parent-constructor ")
    }
     componentDidMount(){
    // console.log("parent component did mount")
  }
    render(){
        // console.log("parent-render")
         return(
        <div>
            <h1>About</h1>
            <h2>this is namaste react web series</h2>
            {/* <User name={"akash bhaskar (functional component)"}></User> */}
            <UserClass name={"akash bhaskar (class component)"}></UserClass>
            {/* <UserClass name={"miku babu (class component)"}></UserClass> */}
        </div>
    )
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