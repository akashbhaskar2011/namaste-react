import { useEffect, useState } from "react";
const User = (props)=> {
    const [count] = useState(0);
    const [count2] = useState(0);
    useEffect(()=>{
        //api call happense here
    },[])
    return (
        <div className="user-card">
        <h2>Name {props.name}</h2>
        <h3>location</h3>
        <h3>location</h3>
        <h3>location</h3>
        </div>
    )
}
export default User;