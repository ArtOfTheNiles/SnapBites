import { useState, useEffect } from "react";

import Header from "../components/Header";
import MealCard from "../components/MealCard";
import DbMeal from "../api/interfaces/meal.interface";
import { getMeals } from "../api/meal/meal";
import '../assets/styles/mealHistory.css';

// This is the Meal History page, which is used to display the user's meal history.
export default function MealHistory() {
  const [meals, setMeals] = useState<DbMeal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      getMeals().then(setMeals);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    }
    setIsLoading(false);
  }, []);

  return (
    <>
    <Header />
    <div className="meal-history">
      <h1>Your Meal History:</h1>
        {isLoading && <p>Loading meals...</p>}
        {error && <p className="error">Error: {error}</p>}
      <ul className="history-list">
        {meals.map((meal) => (
          <MealCard
            id={meal.id}
            key={meal.id}
            image_url={meal.image_url}
            name={meal.name}
            calories={meal.calories}
            time_eaten={meal.time_eaten}
            weight_est={meal.weight_est}
            carbohydrates={meal.carbohydrates}
            fats={meal.fats}
            proteins={meal.proteins}
            fiber={meal.fiber}
            favorite={meal.favorite}
            profile={meal.profile}
          />
        ))}
      </ul>
    </div>
    </>
  )
}