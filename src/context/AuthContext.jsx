import React, { createContext, useState, useEffect, useContext } from 'react';
    import { useNavigate } from 'react-router-dom';
    import * as jose from 'jose';


    const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const navigate = useNavigate();


      useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          try {
            const payload = jose.decodeJwt(token)
            setUser({ username: payload.username });
          } catch (error) {
            console.error("Invalid token:", error);
            localStorage.removeItem('token');
          }
        }
        setLoading(false);
      }, []);

      const signIn = async (username, password) => {
          // Simulate API call
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });

          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            const payload = jose.decodeJwt(data.token)
            setUser({username: payload.username});
            navigate("/");
            return { success: true };
          } else {
            // Handle error - show message to the user
            return { success: false, message: 'Invalid credentials' };
          }
      };

      const signUp = async (username, password) => {
        // Simulate API call to sign up
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          const payload = jose.decodeJwt(data.token)
          setUser({username: payload.username});
          navigate("/");
          return { success: true };
        } else {
          // Handle error - show message to the user
          const errorData = await response.json();
          return { success: false, message: errorData.message || 'Registration failed' };
        }
      };

      const signOut = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/signin');
      };

      if (loading) {
        return <div>Loading...</div>; // Or a more sophisticated loading indicator
      }

      return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
          {children}
        </AuthContext.Provider>
      );
    };

    export const useAuth = () => useContext(AuthContext);
