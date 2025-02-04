// A quick representation of a meal for the user
// Should have an image, name, and buttons for editing or favoriting
import '../assets/styles/MealCard.css'

export default function MealCard() {
  return (
    <div className="meal-card">
      <img src="https://picsum.photos/200" alt="Meal" />
      <h3>Meal Name</h3>
      <button>Edit</button>
      <button>Favorite</button>
    </div>
  )
}