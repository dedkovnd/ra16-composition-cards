import React from "react";
//////test comment 2
export const Card = props => (
    <div className="card mt-3" style={{width: "18rem"}}>
        {props.children}
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
        <p className="card-text"> {props.text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
)

