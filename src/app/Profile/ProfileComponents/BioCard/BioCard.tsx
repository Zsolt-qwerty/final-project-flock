"use client";


import styles from "./BioCard.module.css";

interface BioCardProps {
  isEditing: boolean;
  editedUser: { name: string; email: string; bio: string };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSave: () => void;
  handleCancel: () => void;
}

export default function BioCard({
  isEditing,
  editedUser,
  handleChange,
  handleSave,
  handleCancel,
}: BioCardProps) {
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
            <button onClick={handleSave} className={styles.saveButton}>
              Save
            </button>
            <button onClick={handleCancel} className={styles.saveButton}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>
              <span className={styles.boldBio}>userName: {editedUser.name}</span>
            </p>
            <p>
              <span className={styles.boldBio}>Email:</span> {editedUser.email}
            </p>
            <br />
            <p>
              <span className={styles.boldBio}>Bio</span> {editedUser.bio}
            </p>
          </>
        )}
      </div>
    </div>
  );
}