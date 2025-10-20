import { useState } from "react";
import Header from "./Header";
import Members from "./Members";
import Chat from "./Chat";
import Memes from "./Memes";
import About from "./About";

export default function Dashboard() {
  const [tab, setTab] = useState("Members");

  return (
    <div className="app">
      <Header active={tab} onNavigate={setTab} />
      <main className="container">
        {tab === "Members" && <Members />}
        {tab === "Chat" && <Chat />}
        {tab === "Memes" && <Memes />}
        {tab === "About" && <About />}
      </main>
    </div>
  );
        }
