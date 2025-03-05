"use client";

import HubContainer from "../components/HubContainer/HubContainer";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
import BioCard from "./ProfileComponents/BioCard/BioCard";
import EditingCard from "./ProfileComponents/EditingCard/EditingCard";

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

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User>(user);

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setEditedUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(editedUser);
    localStorage.setItem("userProfile", JSON.stringify(editedUser));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  return (
    <div className={styles.profile}>
      <Image
        className={styles.profileImage}
        src="/Profile/ProfileImagePlaceholder.png"
        alt="placeholder image for the profile picture"
        width={200}
        height={200}
      />
      <BioCard
        user={user}
        editedUser={editedUser}
        isEditing={isEditing}
        handleChange={handleChange}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />

      <EditingCard isEditing={isEditing} setIsEditing={setIsEditing} />

      <h3>Joined Hubs:</h3>
      <HubContainer />
    </div>
  );
}
