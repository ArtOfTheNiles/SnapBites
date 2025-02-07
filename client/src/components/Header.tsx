// Branding
// If not logged in, show the login button
// If logged in, show the profile name and settings
// If not present on the index while logged in, show the log meal button
import { Link } from 'react-router-dom'
import '../assets/styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <span className="logo-container">
        {/* Icon */}
        <h1 className="logo-snap">Snap</h1>
        <h1 className="logo-bites">Bites</h1>
      </span>
      <span className="profile-container">
        <Link to="/profile" className="profile-link">{'John Doe'}</Link>
        <button className="login-button">Login</button>
      </span>
    </header>
  )
}