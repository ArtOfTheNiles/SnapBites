// This is the Meal History page, which is used to display the user's meal history.
import MealCard from "../components/MealCard";
import '../assets/styles/MealHistory.css';

export default function MealHistory() {
  return (
    <div className="meal-history">
      <h1>Your Meal History:</h1>
      <ul className="history-list">
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
      </ul>
    </div>
  )
}