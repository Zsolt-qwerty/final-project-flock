"use client";

interface HubCardProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const HubCard = ({ label, onClick, className }: HubCardProps) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};
export default HubCard;
