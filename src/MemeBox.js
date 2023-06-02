import React from "react";

function MemeBox(props) {
    return (
        <div className="box">
            <img src={props.memebox} alt="" className="main-img" />
        </div>
    )
}

export default MemeBox