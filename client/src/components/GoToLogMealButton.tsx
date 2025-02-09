// This is the Log Meal button, which is central to the app and is used to log a meal.
// Should have added flair, but be repeatable throughout the app
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/LogMealButton.css'

export default function GoToLogMealButton() {
  return (
  <>
    <Link to="/logmeal" className="log-meal-link">
      <FontAwesomeIcon icon={faBurger} />
    </Link>
  </>
  )
}