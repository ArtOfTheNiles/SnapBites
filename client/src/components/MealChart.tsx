// https://mui.com/material-ui/react-slider/

import React from 'react';
import Slider from '@mui/material/Slider';

export interface MacroSet {
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
}

interface MealChartProps {
  onMacroChange: (newMacros: MacroSet) => void;
}

export default function MealChart({ onMacroChange }: MealChartProps) {
  const [protein, setProtein] = React.useState(0);
  const [fat, setFat] = React.useState(0);
  const [carbs, setCarbs] = React.useState(0);
  const [fiber, setFiber] = React.useState(0);

  const macroSliderHandler = (sliderID: string) => (_event: Event, newValue: number | number[]) => {
    const total = protein + fat + carbs + fiber;

    if(newValue === 100) {
      switch (sliderID) {
        case 'protein-slider':
          setProtein(newValue as number);
          setFat(0);
          setCarbs(0);
          setFiber(0);
          break;
        case 'fat-slider':
          setProtein(0);
          setFat(newValue as number);
          setCarbs(0);
          setFiber(0);
          break;
        case 'carb-slider':
          setProtein(0);
          setCarbs(newValue as number);
          setFat(0);
          setFiber(0);
          break;
        case 'fiber-slider':
          setProtein(0);
          setFat(0);
          setCarbs(0);
          setFiber(newValue as number);
          break;
        }
    }else if(total >= 100) {
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
      onMacroChange({ protein, fat, carbs, fiber });
    }
  }

  // console.log(`This is raw values p:${protein} ft:${fat} c:${carbs} fb:${fiber} total:${protein + fat + carbs + fiber}`);

  return (
    <div className="meal-chart">
      <div className="chart-container">
        <div className="chart">
          <h2>Total: { protein + fat + carbs + fiber }%</h2>

          <p>Protein: {protein}%</p>
          <Slider
            value={typeof protein === 'number' ? protein : 0}
            onChange={macroSliderHandler('protein-slider')}
            id="protein-slider"
            aria-label="protein-slider"
          />

          <p>Fat: {fat}%</p>
          <Slider
            value={typeof fat === 'number' ? fat : 0}
            onChange={macroSliderHandler('fat-slider')}
            id="fat-slider"
            aria-label="fat-slider"
          />

          <p>Carbs: {carbs}%</p>
          <Slider
            value={typeof carbs === 'number' ? carbs : 0}
            onChange={macroSliderHandler('carb-slider')}
            id="carb-slider"
            aria-label="carb-slider"
          />

          <p>Fiber: {fiber}%</p>
          <Slider
            value={typeof fiber === 'number' ? fiber : 0}
            onChange={macroSliderHandler('fiber-slider')}
            id="fiber-slider"
            aria-label="fiber-slider"
          />

        </div>
      </div>
    </div>
  )
}