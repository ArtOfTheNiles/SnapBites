import { useState, FormEvent, ChangeEvent } from "react";

import AuthService from '../authService';
import { login } from "../api/auth/auth.ts";
import Header from "../components/Header.tsx";
import '../assets/styles/login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    setError('');
    e.preventDefault();
    try {
      const data = await login(loginData);
      AuthService.login(data.token);
    } catch (err) {
      setError('Failed to authorize login: ' + err);
    }
  };

  return (
    <>
    <Header />

    <div className='login-page'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <h2>Use those credentials for <em>good</em></h2>
        <div className='error'>
          {error && <p>{error}</p>}
        </div>
        <div className='login-container'>
          <label >Username</label>
          <input 
            type='text'
            name='username'
            aria-label='username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
          <label>Password</label>
          <input 
            type='password'
            name='password'
            aria-label='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
    </>
  )
};

export default Login;
