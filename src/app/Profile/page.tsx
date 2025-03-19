"use client";

import HubContainer from "../components/HomeHubContainer/HomeHubContainer";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Image from "next/image";
import BioCard from "./ProfileComponents/BioCard/BioCard";
import EditingCard from "./ProfileComponents/EditingCard/EditingCard";
import { supabase } from "../utils/supabase/auth"; 

interface User {
  name: string;
  email: string;
  bio: string;
  hubsJoined: string[];
}

type BannerColor =
  | "#ff3f3f"
  | "#feabab"
  | "#ff8534"
  | "#ffd955"
  | "#275aff"
  | "#4b6e49"
  | "#f8f5f3"
  | "#dfdfdf"
  | "#000000";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User>({
    name: "",
    email: "",
    bio: "",
    hubsJoined: [],
  });
  const [bannerColor, setBannerColor] = useState<BannerColor>("#275aff");
  // Loading state for time delay
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data from Supabase
  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        //  Probably a better way to clean this up and import it as function for safety
        const { data: userData } = await supabase
          .from("users")
          .select("user_name, user_bio")
          .eq("id", data.user.id)
          .single();

          //Sets the users data to each part
        if (userData) {
          const userProfile = {
            name: userData.user_name,
            email: data.user.email ?? "",
            bio: userData.user_bio,
            hubsJoined: [],
          };
          setUser(userProfile);
          setEditedUser(userProfile);
        }
      }
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Update user profile in Supabase
  const handleSave = async () => {
    const { data } = await supabase.auth.getUser();
    if (data?.user) {
      const { error } = await supabase
        .from("users")
        .upsert({
          id: data.user.id,
          user_name: editedUser.name,
          user_bio: editedUser.bio,
        })
        .eq("id", data.user.id);

      if (!error) {
        setUser(editedUser);
        localStorage.setItem("userProfile", JSON.stringify(editedUser));
        setIsEditing(false);
      } else {
        console.error("Error updating profile:", error);
      }
    }
  };

  const handleCancel = () => {
    if (user) {
      setEditedUser(user);
    }
    setIsEditing(false);
  };

  // loading feature that we can adjust later with an icon or something 
  if (isLoading) {
    return <div className={styles.loadingMessage}>Loading...</div>;
  }

  //Checks if user is logined in 
  if (!user) {
    return (
      <div className={styles.loginMessage}>
        Please log in to view your profile.
      </div>
    );
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
          editedUser={editedUser}
          isEditing={isEditing}
          handleChange={handleChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
        <div className={styles.favHubsContainer}>
          <h3 className={styles.joinedHubs}>Joined Hubs</h3>
          <HubContainer />
        </div>
      </div>
    </div>
  );
}