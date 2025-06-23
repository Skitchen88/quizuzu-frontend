import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import { auth, db } from '../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function TopBar() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username || "");
        }
      } else {
        setUsername("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.topRow}>
          <div style={styles.left}>Quizuzu</div>
          <input
            type="text"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        <div style={styles.bottomRow}>
          {user ? (
            <>
              <span style={styles.username}>{username}</span>
              <Link to="/profile" style={styles.authButton}>Profile</Link>
              <button onClick={handleLogout} style={styles.authButton}>Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ ...styles.authButton, textDecoration: 'none' }}>Login</Link>
              <Link to="/register" style={{ ...styles.authButton, textDecoration: 'none' }}>Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    zIndex: 999,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  left: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  searchInput: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    flex: 1,
    minWidth: '250px',
    maxWidth: '350px',
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  authButton: {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backgroundColor: '#6a5acd',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  username: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },
};

export default TopBar;
