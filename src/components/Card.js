import React from "react";

export default function Card(props) {
    const {
        img,
        title,
        rating,
        price,
        reviewCount,
        location,
        openSpots
    } = props;


    let badgeText;
    if (openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`../images/${img}`} />
            <div className="card--stats">
                <img className="card--star" src="../images/star.png" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) *</span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}