// Trying to make a sub-component for the meal chart
// Need to find a way to make the chart responsive
// https://mui.com/material-ui/react-slider/

import React from 'react';
import Slider from '@mui/material/Slider';

interface Macronutrients {
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
}

export default function MealChart() {
  const [protein, setProtein] = React.useState(0);
  const [fat, setFat] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);
  const [fiber, setFiber] = React.useState(0);

  const handleSliderChange = (sliderID: string) => (event: Event, newValue: number | number[]) => {
    const total = protein + fat + carbs + fiber;
    if(total >= 100) {
      // TODO separate view from logic 
      switch (sliderID) {
        case 'protein-slider':
          setProtein(newValue as number);
          setFat(Math.floor(fat - (fat / 100)));
          setCarbs(Math.floor(carbs - (carbs / 100)));
          setFiber(Math.floor(fiber - (fiber / 100)));
          break;
        case 'fat-slider':
          setProtein(Math.floor(protein - (protein / 100)));
          setFat(newValue as number);
          setCarbs(Math.floor(carbs - (carbs / 100)));
          setFiber(Math.floor(fiber - (fiber / 100)));
          break;
        case 'carb-slider':
          setProtein(Math.floor(protein - (protein / 100)));
          setCarbs(newValue as number);
          setFat(Math.floor(fat - (fat / 100)));
          setFiber(Math.floor(fiber - (fiber / 100)));
          break;
        case 'fiber-slider':
          setProtein(Math.floor(protein - (protein / 100)));
          setFat(Math.floor(fat - (fat / 100)));
          setCarbs(Math.floor(carbs - (carbs / 100)));
          setFiber(newValue as number);
          break;
        }
    }else{
      switch (sliderID) {
        case 'protein-slider':
          setProtein(newValue as number);
          break;
        case 'fat-slider':
          setFat(newValue as number);
          break;
        case 'carb-slider':
          setCarbs(newValue as number);
          break;
        case 'fiber-slider':
          setFiber(newValue as number);
          break;
      }
    }
  }

  console.log(`This is raw values p:${protein} ft:${fat} c:${carbs} fb:${fiber} total:${protein + fat + carbs + fiber}`);

  return (
    <div className="meal-chart">
      <h2>Meal Chart</h2>
      <div className="chart-container">
        <div className="chart">
          <h2>Total: { protein + fat + carbs + fiber }%</h2>

          <p>Protein: {protein}%</p>
          <Slider
            value={typeof protein === 'number' ? protein : 0}
            onChange={handleSliderChange('protein-slider')}
            id="protein-slider"
            aria-label="protein-slider"
          />

          <p>Fat: {fat}%</p>
          <Slider
            value={typeof fat === 'number' ? fat : 0}
            onChange={handleSliderChange('fat-slider')}
            id="fat-slider"
            aria-label="fat-slider"
          />

          <p>Carbs: {carbs}%</p>
          <Slider
            value={typeof carbs === 'number' ? carbs : 0}
            onChange={handleSliderChange('carb-slider')}
            id="carb-slider"
            aria-label="carb-slider"
          />

          <p>Fiber: {fiber}%</p>
          <Slider
            value={typeof fiber === 'number' ? fiber : 0}
            onChange={handleSliderChange('fiber-slider')}
            id="fiber-slider"
            aria-label="fiber-slider"
          />

        </div>
      </div>
    </div>
  )
}