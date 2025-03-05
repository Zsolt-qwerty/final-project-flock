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
    <div className={styles.editingContainer}>
      <button
        className={styles.editingButton}
        onClick={() => setIsEditing(!isEditing)}
      >
        Edit Profile
      </button>
    </div>
  );
}
