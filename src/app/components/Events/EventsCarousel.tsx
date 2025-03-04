import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "National Stamp Collectors Meetup",
    date: "March 15, 2025",
    description: "Join fellow collectors for a showcase of rare and unique stamps.",
    image: "/images/stamp_meetup.jpg",
  },
  {
    id: 2,
    title: "Vintage Stamp Auction",
    date: "April 2, 2025",
    description: "Bid on classic and rare stamps from around the world.",
    image: "/images/stamp_auction.jpg",
  },
  {
    id: 3,
    title: "International Philately Expo",
    date: "May 20, 2025",
    description: "Experience a global exhibition of stamps and postal history.",
    image: "/images/stamp_expo.jpg",
  },
  {
    id: 4,
    title: "Rare Stamps Showcase",
    date: "June 5, 2025",
    description: "View some of the rarest and most valuable stamps in existence.",
    image: "/images/rare_stamps.jpg",
  },
];

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <h2>Upcoming Stamp Events</h2>
      <div className="carousel-container">
        <button onClick={prevEvent}>&#10094;</button>

        <div className="event">
          <img src={events[currentIndex].image} alt={events[currentIndex].title} />
          <h3>{events[currentIndex].title}</h3>
          <p><strong>Date:</strong> {events[currentIndex].date}</p>
          <p>{events[currentIndex].description}</p>
        </div>

        <button onClick={nextEvent}>&#10095;</button>
      </div>
    </div>
  );
}
