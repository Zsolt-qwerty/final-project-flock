'use client';
import HubCard from '../HubCard/HubCard';

//This file defines a React component called HubContainer.
// Its role is to serve as a container for HubCard components. 
// includes the HubCard component with an href prop set to /SingleHub.
const HubContainer = () => {
    return (
        <div>
          <HubCard label="Stamps" href="/SingleHub"/> {/* Make sure it's lowercase */}
        </div>
      );
    };

export default HubContainer;