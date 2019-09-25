import React from "react";
const GridItem = (props) => {
    return (
        <div className="flex-item">
            <div className="img-container">
                <img src={props.image} alt="К календарным праздникам prospect" />
            </div>
            <div className="content-container">   
                <h4>{props.title}</h4>
                <a className="button button-white" href={props.url}>go to project</a>
            </div>
        </div>                
    );
};
export default GridItem;