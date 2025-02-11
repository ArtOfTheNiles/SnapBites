export default interface DbMeal {
  id: number | null;
  image_url?: string;
  name: string;
  weight_est?: number;
  calories: number;
  carbohydrates?: number;
  fats?: number;
  proteins?: number;
  fiber?: number;
  time_eaten: Date;
  favorite?: number;
  profile: number;
}