import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineSttatus,setOnlineStatus]= useState(true);
//check if online
 useEffect(()=>{
    window.addEventListener('online', ()=>{
        setOnlineStatus(true)
    });

    window.addEventListener('offline', ()=>{
        setOnlineStatus(false)
    });
 },[])
 
//boolean value 
    return onlineSttatus;
}

export default useOnlineStatus