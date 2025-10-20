import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAU1VUMYDIcNq8pd9wS3qSvUV9CwCl6baE",
  authDomain: "class-web-4bf8c.firebaseapp.com",
  projectId: "class-web-4bf8c",
  storageBucket: "class-web-4bf8c.firebasestorage.app",
  messagingSenderId: "794537529823",
  appId: "1:794537529823:web:3bda35f950967e705f346a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
