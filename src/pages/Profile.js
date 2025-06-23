// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!userData) return <p>Loading profile...</p>;

  return (
    <div style={styles.container}>
      <h2>Welcome, {userData.username}!</h2>
      <p><strong>Full Name:</strong> {userData.firstName} {userData.lastName}</p>
      <p><strong>Email:</strong> {userData.email}</p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/create-quiz")}>
          ➕ Create a New Quiz
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "left",
  },
  buttonContainer: {
    marginTop: "1.5rem",
  },
  button: {
    padding: "0.75rem 1.25rem",
    fontSize: "1rem",
    backgroundColor: "#6a5acd",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
