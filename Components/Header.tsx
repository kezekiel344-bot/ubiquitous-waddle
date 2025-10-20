import Image from "next/image";
import Link from "next/link";
import { isAdmin, logout } from "../lib/auth";

type Props = {
  active: string;
  onNavigate: (tab: string) => void;
};

export default function Header({ active, onNavigate }: Props) {
  return (
    <header className="header">
      <Image src="/logo.svg" alt="Celestial R" width={36} height={36} />
      <div className="title">Celestial R</div>
      <nav className="nav">
        {["Members", "Chat", "Memes", "About"].map((t) => (
          <button
            key={t}
            className={`tab ${active === t ? "active" : ""}`}
            onClick={() => onNavigate(t)}
          >
            {t}
          </button>
        ))}
        <Link href="/admin" className="tab">Admin</Link>
        {isAdmin() && (
          <button className="tab" onClick={logout}>Logout</button>
        )}
      </nav>
    </header>
  );
        }
