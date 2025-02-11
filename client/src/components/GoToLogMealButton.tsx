import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faBowlFood, faBowlRice, faBurger, faCakeCandles, faCarrot, faChampagneGlasses, faCheese, faCookieBite, faDrumstickBite, faFish, faHotdog, faIceCream, faLemon, faPizzaSlice, faShrimp, faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import '../assets/styles/logMealButton.css'

const iconList = [ faBowlFood, faCarrot, faLemon, faStroopwafel, faShrimp, faFish, faPizzaSlice, faIceCream, faHotdog, faDrumstickBite, faCookieBite, faCheese, faChampagneGlasses, faCakeCandles, faBowlRice, faAppleWhole, faBurger ]

export default function GoToLogMealButton() {
  return (
  <>
    <Link to="/logmeal" className="log-meal-button">
        <FontAwesomeIcon icon={
          iconList[ Math.floor(Math.random()* (iconList.length + 1))]
        }/>
        <small>log</small>
        <small>meal</small>
    </Link>
  </>
  )
}