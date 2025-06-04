import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok && data.access_token) {
        localStorage.setItem('token', data.access_token);
        navigate('/dashboard'); // Change to your protected route
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2 className={styles.title}>Sign In</h2>
        {error && <div className={styles.error}>{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
        <div className={styles.signupLink}>
          Don't have an account?{' '}
          <span
            className={styles.link}
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;