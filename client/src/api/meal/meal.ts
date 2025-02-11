import DbMeal from "../interfaces/meal.interface";
const API_URL = '/api/meal';

export async function  getMeals (): Promise<DbMeal[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch meals');
  }
  return response.json();
};

export async function getMealsByProfileId(profileId: number): Promise<DbMeal[]>{
  // TODO: Implement the API call to fetch meals by profile id, something like this:
  // SELECT * FROM meal WHERE profile_id = profileId ORDER BY date DESC
  const response = await fetch(`${API_URL}/profile/${profileId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch meals for profile with id ${profileId}`);
  }
  return response.json();
};

export async function getMealById(id: string): Promise<DbMeal>{
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch meal with id ${id}`);
  }
  return response.json();
};

export async function  createMeal (meal: DbMeal): Promise<DbMeal> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meal),
  });
  if (!response.ok) {
    throw new Error('Failed to create meal');
  }
  return response.json();
};

export async function  updateMeal (id: string, meal: Partial<DbMeal>): Promise<DbMeal> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meal),
  });
  if (!response.ok) {
    throw new Error(`Failed to update meal with id ${id}`);
  }
  return response.json();
};

export async function  deleteMeal (id: string): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete meal with id ${id}`);
  }
};