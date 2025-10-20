export const ADMIN_PASSWORD = "celestial2025";

export function isAdmin(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cr_admin") === "true";
}

export function tryLogin(pass: string): boolean {
  const ok = pass === ADMIN_PASSWORD;
  if (typeof window !== "undefined") {
    localStorage.setItem("cr_admin", ok ? "true" : "false");
  }
  return ok;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cr_admin");
  }
                            }
