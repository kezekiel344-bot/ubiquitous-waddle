import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { ref, onValue, push } from "firebase/database";
import { isAdmin } from "../lib/auth";

type Member = {
  id?: string;
  name: string;
  photo: string;
  bio: string;
  whatsapp?: string;
  instagram?: string;
};

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const admin = isAdmin();

  useEffect(() => {
    const membersRef = ref(db, "members");
    const unsub = onValue(membersRef, (snap) => {
      const data = snap.val() || {};
      const list: Member[] = Object.entries<any>(data)
        .map(([id, m]) => ({ id, ...m }))
        .sort((a, b) => (a.name || "").localeCompare(b.name || ""));
      setMembers(list);
    });
    return () => unsub();
  }, []);

  async function addMember(m: Omit<Member, "id">) {
    const membersRef = ref(db, "members");
    await push(membersRef, m);
  }

  return (
    <section className="panel">
      <h3 className="section-title">Members</h3>
      <div className="grid">
        {members.map((m) => (
          <article className="card" key={m.id}>
            <img src={m.photo} alt={m.name} />
            <div className="body">
              <strong>{m.name}</strong>
              <p style={{ color: "var(--muted)" }}>{m.bio}</p>
              <div className="row">
                {m.whatsapp && (
                  <a className="btn" href={m.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
                )}
                {m.instagram && (
                  <a className="btn secondary" href={m.instagram} target="_blank" rel="noreferrer">Instagram</a>
                )}
              </div>
            </div>
          </article>
        ))}
        {members.length === 0 && (
          <div className="panel" style={{ gridColumn: "1 / -1", color: "var(--muted)" }}>
            No members yet — add the first one below.
          </div>
        )}
      </div>

      {admin && <MemberForm onAdd={addMember} />}
    </section>
  );
}

function MemberForm({ onAdd }: { onAdd: (m: Omit<Member, "id">) => void }) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("/samples/member1.jpg");
  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");

  return (
    <div className="panel" style={{ marginTop: 16 }}>
      <h4 className="section-title">Admin: Add member</h4>
      <div className="row">
        <input className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="input" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </div>
      <textarea className="textarea" placeholder="Short bio" value={bio} onChange={(e) => setBio(e.target.value)} />
      <div className="row">
        <input className="input" placeholder="WhatsApp link (https://wa.me/...)" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
        <input className="input" placeholder="Instagram link" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
      </div>
      <button
        className="btn"
        onClick={() => {
          if (!name || !bio || !photo) return;
          onAdd({ name, photo, bio, whatsapp, instagram });
          setName(""); setPhoto("/samples/member1.jpg"); setBio(""); setWhatsapp(""); setInstagram("");
        }}
      >
        Add member
      </button>
    </div>
  );
               }
