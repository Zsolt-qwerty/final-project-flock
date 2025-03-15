"use client";
import Link from "next/link";

//Link from Next.js to make the button a link to the SingleHub page.
//href prop is passed to the button component, so each button can link to a different URL.

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
