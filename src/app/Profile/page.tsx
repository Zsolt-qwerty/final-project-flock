"use client";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/auth";
import HubContainer from "../components/HomeHubContainer/HomeHubContainer";
import Image from "next/image";
import BioCard from "./ProfileComponents/BioCard/BioCard";
import EditingCard from "./ProfileComponents/EditingCard/EditingCard";
import styles from "./Profile.module.css";

interface User {
  name: string;
  email: string;
  bio: string;
  hubsJoined: string[];
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null); // Default to null until the user is fetched from Supabase
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [bannerColor, setBannerColor] = useState<string>("#275aff");

  // Fetch user data from Supabase and set it
  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        // Fetch additional user info from the database
        const { data: userData } = await supabase
          .from("users")
          .select("user_name, user_bio")
          .eq("id", data.user.id)
          .single();

        if (userData) {
          setUser({
            name: userData.user_name,
            email: data.user.email ?? "",
            bio: userData.user_bio,
            hubsJoined: [],
          });
          setEditedUser({
            name: userData.user_name,
            email: data.user.email ?? "",
            bio: userData.user_bio,
            hubsJoined: [],
          });
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editedUser) {
      setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    if (editedUser) {
      setUser(editedUser);
      localStorage.setItem("userProfile", JSON.stringify(editedUser));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    if (user) {
      setEditedUser(user); // Revert changes if cancel is pressed
    }
    setIsEditing(false);
  };

  // If the user is not logged in, display a message
  if (!user) {
    return <div className={styles.loginMessage}>Please log in to view your profile.</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div
        className={styles.banner}
        style={{ backgroundColor: bannerColor }}
      ></div>
      <div className={styles.imageEditingContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.profileImage}
            src="/avatar.png"
            alt="placeholder image for the profile picture"
            width={200}
            height={200}
          />
        </div>
        <EditingCard
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setBannerColor={setBannerColor}
        />
      </div>
      <div className={styles.bioHubsContainer}>
        <BioCard
          editedUser={editedUser!}
          isEditing={isEditing}
          handleChange={handleChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
        <div className={styles.favHubsContainer}>
          <h3>Joined Hubs:</h3>
          <HubContainer />
        </div>
      </div>
    </div>
  );
}
