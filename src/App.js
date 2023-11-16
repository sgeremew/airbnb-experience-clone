import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

export default function App() {

  const cardComponents = cardData.map(data => {
    return (<Card 
      key={data.id}
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      title={data.title}
      price={data.price}
    />);
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cardComponents}
      </section>
    </div>
  );
}
