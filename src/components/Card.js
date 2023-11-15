import React from "react";

export default function Card(props) {
    const {
        img,
        title,
        rating,
        price,
        reviewCount,
        country
    } = props;
    return (
        <div className="card">
            <img className="card--image" src={`../images/${img}`} />
            <div className="card--stats">
                <img className="card--star" src="../images/star.png" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) *</span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price} / person</span></p>
        </div>
    )
}