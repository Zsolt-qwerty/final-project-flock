"use client";
import HubCard from "../HubCard/HubCard";

//This is the Hub Container, only for the All Hubs Page

//This file defines a React component called HubContainer.
// Its role is to serve as a container for HubCard components.
// includes the HubCard component with an href prop set to /SingleHub.
const AllHubContainer = () => {
  return (
    <div>
      <HubCard label="Stamps" href="/SingleHub" />
      <HubCard label="Photography" href="/SingleHub" />
      <HubCard label="Painting" href="/SingleHub" />
      <HubCard label="Cooking" href="/SingleHub" />
      <HubCard label="Gardening" href="/SingleHub" />
      <HubCard label="Reading" href="/SingleHub" />
      <HubCard label="Knitting" href="/SingleHub" />
      <HubCard label="Music" href="/SingleHub" />
      <HubCard label="Hiking" href="/SingleHub" />
      <HubCard label="Cycling" href="/SingleHub" />
      <HubCard label="Coding" href="/SingleHub" />
      <HubCard label="Traveling" href="/SingleHub" />
      <HubCard label="Writing" href="/SingleHub" />
      <HubCard label="Gaming" href="/SingleHub" />
      <HubCard label="Birdwatching" href="/SingleHub" />
    </div>
  );
};

export default AllHubContainer;
