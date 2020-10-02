import React from "react";

export const CardBody = props => (
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
)