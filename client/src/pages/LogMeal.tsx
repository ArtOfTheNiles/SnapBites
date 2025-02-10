// This is the Log Meal page, where users will log their meal information
import React, { useState } from 'react'
import Slider from '@mui/material/Slider';

import '../assets/styles/LogMeal.css'
import MealChart, { MacroSet } from "../components/MealChart";
import Header from "../components/Header";

export default function LogMeal() {
  const [formData, setFormData] = useState({
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
  });

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
    console.log("Meal logged", formData);
  }

  return (
    <>
    <Header />
    
    <div className="log-meal">
      <h1>Log Your Meal</h1>
      <form id="log-meal-form" onSubmit={handleSubmit}>
        <label htmlFor="mealName">Meal Name:</label>
        <input type="text"
        id="mealName"
        name="mealName"
        defaultValue="Lunch"
        onChange={handleChange}
        required
        />

        <label htmlFor="weight">Weight (g):</label>
        <input type="number"
        id="weight"
        name="weight"
        min="10"
        max="2000"
        step="10"
        defaultValue="100"
        onChange={handleChange}
        required
        />

        <label htmlFor="calories">Calories:</label>
        <input type="number"
        id="calories"
        name="calories"
        min="0"
        max="8000"
        step="10"
        defaultValue="650"
        onChange={handleChange}
        required
        />

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