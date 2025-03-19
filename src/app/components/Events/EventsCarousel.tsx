"use client";
import React from "react";
import styles from "./EventCarousel.module.css";
import { eventsByHub } from "../../Data/eventData";

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

type EventCarouselProps = {
  hubId: number;
};

export default function EventCarousel({ hubId }: EventCarouselProps) {
  const eventsForHub = eventsByHub[hubId] || [];

  return (
    <div className={styles.eventsContainer}>
      <h2>Upcoming Events</h2>
      <div className={styles.eventsList}>
        {eventsForHub.map((event: Event) => (
          <div key={event.id} className={styles.eventCard}>
            <h3>{event.title}</h3>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
