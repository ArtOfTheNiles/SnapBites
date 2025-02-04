// Branding
// If not logged in, show the login button
// If logged in, show the profile name and settings
// If not present on the index while logged in, show the log meal button
import '../assets/styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo-snap">Snap</h1>
      <h1 className="logo-bites">Bites</h1>
    </header>
  )
}