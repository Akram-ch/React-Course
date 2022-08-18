import React from "react"
import data from "../data"
import CardEntry from "./CardEntry";

export default function Card(){
    const entries = data.map((entry)=>{
        return(
            <CardEntry 
                {...entry}
            />
        )
    })
    return(
        <div className="card">
            {entries}
        </div>
    )
}