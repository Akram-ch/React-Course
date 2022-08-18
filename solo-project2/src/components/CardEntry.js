import React from "react";

export default function CardEntry(props){
    return(
        <div className="cardElement">
            <div className="left">
                <img src={props.imageUrl}></img>
            </div>
            <div className="right">
                <div className="location">
                    <img src="red.png" className="location-icon"></img>
                    <p className="country">{props.location.toUpperCase()}</p>
                    <a className="google-maps" href={props.googleMapsUrl}>View on google maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
                <p className="date">{props.startDate}-{props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>

    )
}