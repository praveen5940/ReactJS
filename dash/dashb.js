import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

export default function ViewDetails(){
    
    const [userDb, setUserDb] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:3012/get')
        .then(res => res.json())
        .then(json => setUserDb(json))

    },[])
    
    return(
        <>
        <div>
        
        {
            userDb.map((value,index)=>(
                <>
                <p>{value.}</p>
                <p>{value.}</p>
                <p>{value.}</p>
                </>
                
            ))
        }
        </div>
        </>
    );
}