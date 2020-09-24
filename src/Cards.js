import React from "react";

export function Cards (props) {
    return (
        <div className="card mt-3" style={{width: "18rem"}}>
            {props.children}
        </div>
    )
}