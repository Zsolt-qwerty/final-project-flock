import styles from "./EditingCard.module.css";

interface EditingCardProps {
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
}

export default function EditingCard({
  isEditing,
  setIsEditing,
}: EditingCardProps) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        onClick={() => setIsEditing(!isEditing)}
      >
        Edit Profile
      </button>
    </div>
  );
}
