import DbMeal from '../api/interfaces/meal.interface'
import '../assets/styles/mealCard.css'

// A quick representation of a meal for the user
// Should have an image, name, and buttons for editing or favoriting
export default function MealCard(props: DbMeal) {
  return (
    <li className="meal-card">
      {props.image_url && <img src={props.image_url} alt={props.name} />}
      <h3>{props.name}</h3>
      <p>Calories: {props.calories}</p>
      <p>Time: {new Date(props.time_eaten).toLocaleString()}</p>
      <button>Edit</button>
      <button>Favorite</button>
    </li>
  )
}