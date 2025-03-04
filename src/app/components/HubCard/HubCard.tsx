'use client';
import Link from "next/link";

//Link from Next.js to make the button a link to the SingleHub page.
//href prop is passed to the button component, so each button can link to a different URL.

interface HubCardProps {
  label: string;
  href: string;
}

const HubCard = ({ label, href }: HubCardProps) => {
    return (
        <Link href={href}>
          <button>{label}</button>
        </Link>
      );
    };
export default HubCard;
