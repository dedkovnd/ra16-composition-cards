import React from "react";

export const CardBody = props => (
    <>
        <img src={props.url} className="card-img-top" alt=''/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </>

)