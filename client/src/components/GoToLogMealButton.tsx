// This is the Log Meal button, which is central to the app and is used to log a meal.
// Should have added flair, but be repeatable throughout the app
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
// import { faAppleWhole, faBowlFood, faBowlRice, faBurger, faCakeCandles, faCarrot, faChampagneGlasses, faCheese, faCookieBite, faDrumstickBite, faFish, faHotdog, faIceCream, faLemon, faPizzaSlice, faShrimp, faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/LogMealButton.css'

//TODO-Stretch: Add icon shuffle functionality
export default function GoToLogMealButton() {
  return (
  <>
    <Link to="/logmeal" className="log-meal-link">
      {/* <FontAwesomeIcon icon={faBowlFood} />
      <FontAwesomeIcon icon={faCarrot} />
      <FontAwesomeIcon icon={faLemon} />
      <FontAwesomeIcon icon={faStroopwafel} />
      <FontAwesomeIcon icon={faShrimp} />
      <FontAwesomeIcon icon={faFish} />
      <FontAwesomeIcon icon={faPizzaSlice} />
      <FontAwesomeIcon icon={faIceCream} />
      <FontAwesomeIcon icon={faHotdog} />
      <FontAwesomeIcon icon={faDrumstickBite} />
      <FontAwesomeIcon icon={faCookieBite} />
      <FontAwesomeIcon icon={faCheese} />
      <FontAwesomeIcon icon={faChampagneGlasses} />
      <FontAwesomeIcon icon={faCakeCandles} />
      <FontAwesomeIcon icon={faBowlRice} />
      <FontAwesomeIcon icon={faAppleWhole} /> */}
      <FontAwesomeIcon icon={faBurger} />
    </Link>
  </>
  )
}