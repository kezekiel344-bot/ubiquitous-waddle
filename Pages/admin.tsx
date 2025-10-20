import { useState } from "react";
import { tryLogin, isAdmin, logout } from "../lib/auth";

export default function AdminPage() {
  const [pass, setPass] = useState("");
  const admin = isAdmin();

  return (
    <div className="app">
      <div className="container">
        <div className="panel">
          <h3 className="section-title">Admin area</h3>
          {!admin ? (
            <>
              <p>Enter password to unlock admin tools.</p>
              <input
                className="input"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
              />
              <div className="row" style={{ marginTop: 10 }}>
                <button
                  className="btn"
                  onClick={() => {
                    const ok = tryLogin(pass);
                    if (!ok) alert("Incorrect password.");
                  }}
                >
                  Login
                </button>
              </div>
              <p className="warn" style={{ marginTop: 8 }}>
                Password: celestial2025
              </p>
            </>
          ) : (
            <>
              <p className="ok">Admin mode enabled. Use Members and Memes tabs to add content.</p>
              <div className="row" style={{ marginTop: 10 }}>
                <a className="btn" href="/">Go to Dashboard</a>
                <button className="btn secondary" onClick={logout}>Logout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
          }
