"use client";

//These are place holder hub cards
//They will eventually have a liked and joined
//At the moment Ive just added the container as its has a link set up to stamps
// import HubContainer from "../components/HubContainer/HubContainer";

import { useEffect, useState } from "react";

import styles from "./Profile.module.css";
import Image from "next/image";
import HomeHubContainer from "../components/HomeHubContainer/HomeHubContainer";

interface User {
  name: string;
  email: string;
  bio: string;
  hubsJoined: string[];
}

export default function ProfilePage() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    bio: "",
    hubsJoined: [],
  });

  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [editedUser, setEditedUser] = useState<User>(user); // Temp state for editing

  // Load user data from localStorage or API
  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setEditedUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Save changes
  const handleSave = () => {
    setUser(editedUser);
    localStorage.setItem("userProfile", JSON.stringify(editedUser)); // Save to localStorage
    setIsEditing(false); // Exit edit mode
  };

  // Cancel editing
  const handleCancel = () => {
    setEditedUser(user); // Reset edits
    setIsEditing(false);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.banner}>
        <Image
          className={styles.profileImage}
          src="/Profile/ProfileImagePlaceholder.png"
          alt="placeholder image for the profile picture"
          width={200}
          height={200}
        />

        {isEditing ? (
          // Edit Mode: Show form inputs
          <div className={styles.intro}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />

            <label>Bio:</label>
            <textarea
              name="bio"
              value={editedUser.bio}
              onChange={handleChange}
            />

            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          // View Mode: Show user details
          <div className={styles.intro}>
            <p>
              <strong>Name:</strong>Lara Thompson
            </p>
            <p>
              <strong>Email:</strong> lara97@hotmail.co.uk
            </p>
            <p>
              <strong>Bio:</strong> Hi I&apos;m Lara 🌸
              <p>I&apos;m based in the UK!</p>
              <p>I love stamp collecting and Art!</p>
            </p>
          </div>
        )}
      </div>
      <div className={styles.section}>
        {" "}
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        </div>
        <div className={styles.favHubs}>
          <h3>Joined Hubs:</h3>
          <ul>
            <HomeHubContainer />
            {/* {user.hubsJoined.length > 0 ? user.hubsJoined.map((hub, index) => (
              <li key={index}>{hub}</li>
            )) : <p>No hubs joined yet.</p>} */}
          </ul>
        </div>
      </div>
    </div>
  );
}
