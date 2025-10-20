# Celestial R — united in memories and laughter

Dark, dashboard-style class site with:
- Members (photo, description, WhatsApp, Instagram) stored in Firebase
- Real-time chat (Firebase Realtime Database)
- Memes gallery stored in Firebase
- Admin area (password: celestial2025)
- Ready for GitHub + Vercel

## Firebase rules (testing)
{
  "rules": {
    "members": { ".read": true, ".write": true },
    "memes": { ".read": true, ".write": true },
    "messages": { ".read": true, ".write": true }
  }
}
