import React, { useState } from "react";
import ModelA1 from "../assets/img/1a.jpeg";


const ModelA = () => {

    return (
    <>
    <div className="box">
        <div className="model-container">
            <div className="image-bg">
            <div className="row">
            <div className="col-md-4">
                <img className="image" src={ModelA1} alt="ModelA-1" />
                <div className="image-txt">TEXT</div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default ModelA;