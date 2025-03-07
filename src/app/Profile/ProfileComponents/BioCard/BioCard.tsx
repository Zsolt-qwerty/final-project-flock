"use client";

import { useState } from "react";
import styles from "./BioCard.module.css";

interface BioCardProps {
  isEditing: boolean;
  handleSave: (updatedUser: {
    name: string;
    email: string;
    bio: string;
  }) => void;
  handleCancel: () => void;
}

interface EditedUser {
  name: string;
  email: string;
  bio: string;
}

export default function BioCard({
  isEditing,
  handleSave,
  handleCancel,
}: BioCardProps) {
  const [editedUser, setEditedUser] = useState<EditedUser>({
    name: "Lara Thompson",
    email: "lara97@hotmail.co.uk",
    bio: `Hi I'm Lara 🌸
I'm based in the UK!
I love stamp collecting and Art!
I have a miniature labradoodle called Chris who comes with me everywhere I go 🐕 
If you want to reach out, I would love to connect.`,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    handleSave(editedUser);
  };

  return (
    <div className={styles.bioCardScrollContainer}>
      <div className={styles.bioCardContainer}>
        {isEditing ? (
          <>
            <div className={styles.inputFieldDiv}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputFieldDiv}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputFieldDiv}>
              <label>Bio:</label>
              <textarea
                name="bio"
                value={editedUser.bio}
                onChange={handleChange}
                className={styles.textArea}
              />
            </div>
            <button onClick={saveChanges} className={styles.saveButton}>
              Save
            </button>
            <button onClick={handleCancel} className={styles.saveButton}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>
              <span className={styles.boldBio}></span> {editedUser.bio}
            </p>
            <br />
            <p>
              <span className={styles.boldBio}>Lar297</span>
            </p>
            <p>
              <span className={styles.boldBio}></span> {editedUser.name}
            </p>
            <p>
              <span className={styles.boldBio}>Email:</span> {editedUser.email}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
