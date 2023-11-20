import React from "react";

export default function Card(props) {
    // img={data.coverImg}
    // location={data.location}
    // openSpots={data.openSpots}
    // price={data.price}
    // rating={data.stats.rating}
    // reviewCount={data.stats.reviewCount}
    // title={data.title}

    const {
        coverImg,
        location,
        openSpots,
        price,
        title
    } = props.data;

    const {
        rating,
        reviewCount
    } = props.data.stats;


    let badgeText;
    if (openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={`../images/${coverImg}`} />
            <div className="card--stats">
                <img className="card--star" src="../images/star.png" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) •&nbsp;</span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title">{title}</p>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}