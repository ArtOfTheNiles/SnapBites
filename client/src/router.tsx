import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LogMeal from "./pages/LogMeal";
import MealHistory from "./pages/MealHistory";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/logmeal", element: <LogMeal />},
  {path: "/history", element: <MealHistory />},
  {path: "/profile", element: <Profile />},
  {path: "/login", element: <Login />},
  {path: "*", element: <ErrorPage />}
]);

export default router;