export type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

export const eventsByHub: Record<number, Event[]> = {
  4: [
    //Stamps
    {
      id: 1,
      title: "National Stamp Collectors Meetup",
      date: "March 15, 2025",
      description:
        "Join fellow collectors for a showcase of rare and unique stamps.",
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
      description:
        "Experience a global exhibition of stamps and postal history.",
      image: "/images/stamp_expo.jpg",
    },
    {
      id: 4,
      title: "Rare Stamps Showcase",
      date: "June 5, 2025",
      description:
        "View some of the rarest and most valuable stamps in existence.",
      image: "/images/rare_stamps.jpg",
    },
    {
      id: 5,
      title: "Rare Stamps Auction",
      date: "June 10, 2025",
      description:
        "View some of the rarest and most valuable stamps in existence.",
      image: "/images/rare_stamps.jpg",
    },
  ],
  5: [
    {
      id: 1,
      title: "Landscape Photography Workshop",
      date: "March 15, 2025",
      description:
        "Learn the art of capturing breathtaking landscapes with expert guidance.",
      image: "/images/landscape_workshop.jpg",
    },
    {
      id: 2,
      title: "Street Photography Walk",
      date: "April 2, 2025",
      description:
        "Join fellow photographers in exploring urban scenes and moments.",
      image: "/images/street_photography.jpg",
    },
    {
      id: 3,
      title: "Wildlife Photography Expedition",
      date: "May 20, 2025",
      description:
        "A thrilling experience capturing stunning wildlife in their natural habitat.",
      image: "/images/wildlife_expedition.jpg",
    },
    {
      id: 4,
      title: "Portrait Photography Masterclass",
      date: "June 5, 2025",
      description:
        "Enhance your skills in portrait photography with lighting and posing techniques.",
      image: "/images/portrait_masterclass.jpg",
    },
  ],
  6: [
    {
      id: 1,
      title: "Abstract Painting Workshop",
      date: "March 15, 2025",
      description:
        "Explore the world of abstract art and unleash your creativity with expert guidance.",
      image: "/images/abstract_painting.jpg",
    },
    {
      id: 2,
      title: "Street Art Tour",
      date: "April 2, 2025",
      description:
        "Discover the most stunning street art and murals in the city on this guided tour.",
      image: "/images/street_art_tour.jpg",
    },
    {
      id: 3,
      title: "Sculpture Exhibition",
      date: "May 20, 2025",
      description:
        "Experience a showcase of breathtaking sculptures from renowned and emerging artists.",
      image: "/images/sculpture_exhibition.jpg",
    },
    {
      id: 4,
      title: "Portrait Drawing Masterclass",
      date: "June 5, 2025",
      description:
        "Learn the art of portrait drawing with expert techniques on shading and proportions.",
      image: "/images/portrait_drawing.jpg",
    },
  ],
  7: [
    {
      id: 1,
      title: "Mystery Book Club Meeting",
      date: "March 15, 2025",
      description:
        "Join us for an in-depth discussion on the latest mystery novel and share your theories.",
      image: "/images/mystery_book_club.jpg",
    },
    {
      id: 2,
      title: "Sci-Fi & Fantasy Book Night",
      date: "April 2, 2025",
      description:
        "Explore new worlds and epic adventures in this month's sci-fi and fantasy meetup.",
      image: "/images/scifi_fantasy_club.jpg",
    },
    {
      id: 3,
      title: "Classic Literature Discussion",
      date: "May 20, 2025",
      description:
        "Dive into timeless literary works and engage in thought-provoking conversations.",
      image: "/images/classic_literature.jpg",
    },
    {
      id: 4,
      title: "Poetry & Prose Reading Night",
      date: "June 5, 2025",
      description:
        "Share your favorite poems or original works in an evening of literary appreciation.",
      image: "/images/poetry_reading.jpg",
    },
  ],
  8: [
    {
      id: 1,
      title: "Underground Techno Night",
      date: "March 15, 2025",
      description:
        "Experience an electrifying night of deep beats and pulsating bass with top underground DJs.",
      image: "/images/underground_techno.jpg",
    },
    {
      id: 2,
      title: "Neon Rave Festival",
      date: "April 2, 2025",
      description:
        "Dance all night under neon lights with an epic lineup of techno and house DJs.",
      image: "/images/neon_rave.jpg",
    },
    {
      id: 3,
      title: "Warehouse Techno Party",
      date: "May 20, 2025",
      description:
        "Immerse yourself in the raw energy of an authentic warehouse rave with mind-blowing visuals and music.",
      image: "/images/warehouse_rave.jpg",
    },
    {
      id: 4,
      title: "Sunrise Beach Rave",
      date: "June 5, 2025",
      description:
        "Party till sunrise with hypnotic techno beats on a stunning beach location.",
      image: "/images/beach_rave.jpg",
    },
  ],
  9: [
    {
      id: 1,
      title: "Karate Training Camp",
      date: "March 15, 2025",
      description:
        "Enhance your karate skills with expert instructors in an intensive training session.",
      image: "/images/karate_camp.jpg",
    },
    {
      id: 2,
      title: "Muay Thai Sparring Night",
      date: "April 2, 2025",
      description:
        "Test your striking and clinch techniques in a controlled sparring environment.",
      image: "/images/muay_thai_sparring.jpg",
    },
    {
      id: 3,
      title: "Jiu-Jitsu Submission Workshop",
      date: "May 20, 2025",
      description:
        "Learn and refine your submission techniques with top-level Jiu-Jitsu practitioners.",
      image: "/images/jiu_jitsu_workshop.jpg",
    },
    {
      id: 4,
      title: "MMA Conditioning & Drills",
      date: "June 5, 2025",
      description:
        "Improve your endurance, strength, and technique with MMA-specific drills and conditioning.",
      image: "/images/mma_conditioning.jpg",
    },
  ],
};
