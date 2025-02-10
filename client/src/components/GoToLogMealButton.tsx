// This is the Log Meal button, which is central to the app and is used to log a meal.
// Should have added flair, but be repeatable throughout the app
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faBowlFood, faBowlRice, faBurger, faCakeCandles, faCarrot, faChampagneGlasses, faCheese, faCookieBite, faDrumstickBite, faFish, faHotdog, faIceCream, faLemon, faPizzaSlice, faShrimp, faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import '../assets/styles/LogMealButton.css'

const iconList = [ faBowlFood, faCarrot, faLemon, faStroopwafel, faShrimp, faFish, faPizzaSlice, faIceCream, faHotdog, faDrumstickBite, faCookieBite, faCheese, faChampagneGlasses, faCakeCandles, faBowlRice, faAppleWhole, faBurger ]

//TODO-Stretch: Add icon shuffle functionality
export default function GoToLogMealButton() {
  return (
  <>
    {/* <small className="log-meal-button-text">Log Meal</small> */}
    <Link to="/logmeal" className="log-meal-button">
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
        <FontAwesomeIcon icon={ 
          iconList[ Math.floor(Math.random()* (iconList.length + 1))]
        }/>
        <small>log</small>
        <small>meal</small>
    </Link>
  </>
  )
}