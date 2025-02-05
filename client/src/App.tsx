import './assets/styles/App.css'
import { FalseFooter } from './components/FalseFooter'
import { FalseHeader } from './components/FalseHeader'
import Header from './components/Header'
import LogMeal from './pages/LogMeal'
import MealHistory from './pages/MealHistory'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Header />
      <FalseHeader />
      <LogMeal />
      <MealHistory />
      <Profile />
      <FalseFooter />
    </>
  )
}

export default App
