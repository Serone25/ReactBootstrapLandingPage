import React from "react";
import propTypes from "prop-types";

//CardStyle
const SuperStyles={
    width:180,
}


//Constructor
const Card = (props) => {
    return(
        <div className={props.clase} style={SuperStyles}>
            <img src={props.image} className="card-img-top" alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">{props.label}</a>
            </div>
        </div>
    )
}

//PropTypes
Card.propTypes ={
    clase: propTypes.string,
    title: propTypes.string,
    text:propTypes.string,
    label:propTypes.string,
    image:propTypes.string
}
export default Card;