// Trying to make a sub-component for the meal chart
// Need to find a way to make the chart responsive
// Radar chart failed because of not enough data points to make it look good
// rc-slider is a possiblity, but docs are poor and downloads stopped
// https://mui.com/material-ui/react-slider/

export default function MealChart() {
  return (
    <div className="meal-chart">
      <h2>Meal Chart</h2>
      <div className="chart-container">
        <div className="chart"></div>
      </div>
    </div>
  )
}