// Branding
// If not logged in, show the login button
// If logged in, show the profile name and settings
// If not present on the index while logged in, show the log meal button
import { Link, useLocation } from 'react-router-dom'

import GoToLogMealButton from './GoToLogMealButton';
import '../assets/styles/header.css'

export default function Header() {
  const location = useLocation();

  const logMealButtonLogic = () => {
    if (location.pathname === '/logmeal' || location.pathname === '/login' || location.pathname === '/') {
      return null;
    } else {
      return <GoToLogMealButton />
    }
  }

  return (
    <header className="header">
      <span className="logo-container">
        {/* Icon */}
        <h1 className="logo-snap">Snap</h1>
        <h1 className="logo-bites">Bites</h1>
      </span>
      <span className="nav-container">
        <Link to="/">{location.pathname === '/' ? null : ( "Home" )}</Link>
        <Link to="/history">{location.pathname === '/history' ? null : ( "History" )}</Link>
        <Link to="/profile">{location.pathname === '/profile' ? null : ( "Profile" )}</Link>
        {logMealButtonLogic()}
      </span>
      <span className="profile-container">
        <Link to="/profile" className="profile-link">{
          location.pathname === '/profile' ? null : ( <button className="profile-button">Profile</button> )
        }</Link>
        <Link to="/login" className="login-link">{
          location.pathname === '/login' ? null : ( <button className="login-button">Login</button> )
        }</Link>
      </span>
    </header>
  )
}