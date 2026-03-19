import { useEffect, useState, useLayoutEffect } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import './GoogleLogin.css';

function GoogleLogin() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsInitialized(true);
      if (!currentUser) {
        setShowLogin(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setShowLogin(true);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  if (!isInitialized) {
    return null;
  }

  if (!user) {
    if (!showLogin) return null;
    return (
      <div className="auth-overlay active" aria-modal="true" role="dialog">
        <div className="auth-box">
          <h1 className="auth-title">Welcome</h1>
          <p className="auth-sub">Please sign in with Google to continue</p>
          <button className="auth-button" onClick={handleLogin}>Sign in with Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-loggedin">
      <div className="auth-user">
        <span className="auth-name">{user.displayName || user.email}</span>
        <button className="auth-logout" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default GoogleLogin;
