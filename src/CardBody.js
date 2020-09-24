import React from "react";

export const CardBody = props => (
        <div className="card-body">
            {props.children}
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
)