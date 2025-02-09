// This is the Log Meal page, where users will log their meal information
import '../assets/styles/LogMeal.css'
import MealChart from "../components/MealChart";
import Header from "../components/Header";

export default function LogMeal() {
  return (
    <>
    <Header />
    
    <div className="log-meal">
      <h1>Log Your Meal</h1>
      <form id="log-meal-form">
        <label htmlFor="meal-name">Meal Name:</label>
        <input type="text" id="meal-name" name="meal-name" required />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" required />

        <label htmlFor="calories">Calories:</label>
        <input type="number" id="calories" name="calories" required />

        <MealChart />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />

        <button type="submit">Log Meal</button>
      </form>

    </div>
    </>
  )
}