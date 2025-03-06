'use client';
import HubCard from '../HubCard/HubCard';

//This is the Hub Container, only for the Home Page

//This file defines a React component called HubContainer.
// Its role is to serve as a container for HubCard components. 
// includes the HubCard component with an href prop set to /SingleHub.
const HomeHubContainer = () => {
    return (
        <div>
          <HubCard label="Stamps" href="/Stamps"/>
          <HubCard label="Photography" href="/Photography"/>
        </div>
      );
    };

export default HomeHubContainer;