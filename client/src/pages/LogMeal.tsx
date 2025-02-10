// This is the Log Meal page, where users will log their meal information
import React, { useState } from 'react'
import Slider from '@mui/material/Slider';

import '../assets/styles/LogMeal.css'
import MealChart, { MacroSet } from "../components/MealChart";
import Header from "../components/Header";
import { createMeal, DbMeal } from '../api/meal/meal';

const formDataToDbMeal = (formData: typeof initialFormData, profileId: number): DbMeal => {
  return {
    id: null,
    name: formData.mealName,
    weight_est: formData.weight,
    calories: formData.calories,
    carbohydrates: formData.macros.carbs,
    fats: formData.macros.fat,
    proteins: formData.macros.protein,
    fiber: formData.macros.fiber,
    time_eaten: new Date(`${formData.date}T${formData.time}`),
    profile: profileId
  };
};

const initialFormData = {
  mealName: "Lunch",
  weight: 100,
  calories: 650,
  date: new Date().toISOString().split("T")[0],
  time: "12:00",
  macros: {
    protein: 0,
    fat: 0,
    carbs: 0,
    fiber: 0
  } as MacroSet
};

// --------------- TSX ---------------
export default function LogMeal() {
  const [formData, setFormData] = useState(initialFormData);

  const handleMacroChange = (newMacros: MacroSet) => {
    setFormData(prev => ({
      ...prev,
      macros: newMacros
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: connect with profile information
    const outputMeal = formDataToDbMeal(formData, 1);
    createMeal(outputMeal);
    console.log("Meal logged", outputMeal);
  }

  const handleReset = () => {
    setFormData(initialFormData);
  }


  return (
    <>
    <Header />
    
    <div className="log-meal">
      <h1>Log Your Meal</h1>
      <form id="log-meal-form" onSubmit={handleSubmit} onReset={handleReset}>
        <label htmlFor="mealName">Meal Name:</label>
        <input type="text"
        id="mealName"
        name="mealName"
        defaultValue="Lunch"
        onChange={handleChange}
        required
        />

        <label htmlFor="weight">Weight: {formData.weight}g</label>
        <Slider 
        value={formData.weight}
        id="weight"
        name="weight"
        step={25}
        min={25}
        max={2000}
        defaultValue={100}
        onChange={(_e, value) => setFormData(prev => ({
           ...prev,
           weight: value as number }))
        } />

        <label htmlFor="calories">Calories: {formData.calories}<small>kCal</small></label>
        <Slider value={formData.calories}
        id="calories"
        name="calories"
        step={10}
        min={0}
        max={8000}
        defaultValue={650}
        onChange={(_e, value) => setFormData(prev => ({
           ...prev,
           calories: value as number }))
        } />

        <MealChart onMacroChange={handleMacroChange} />

        <label htmlFor="date">Date:</label>
        <input type="date"
        id="date"
        name="date"
        min="2025-02-01"
        defaultValue={new Date().toISOString().split('T')[0]}
        onChange={handleChange}
        required
        />

        <label htmlFor="time">Time:</label>
        <input type="time"
        id="time"
        name="time"
        defaultValue="12:00"
        onChange={handleChange}
        required
        />

        <button type="submit">Log Meal</button>
        <button type="reset">Reset</button>
      </form>

    </div>
    </>
  )
}