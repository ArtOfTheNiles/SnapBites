import DbMeal from "../interfaces/meal.interface";

const API_URL = '/api/meal';

export const getMeals = async (): Promise<DbMeal[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch meals');
  }
  return response.json();
};

export const getMealsByProfileId = async (profileId: number): Promise<DbMeal[]> => {
  const response = await fetch(`${API_URL}/profile/${profileId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch meals for profile with id ${profileId}`);
  }
  return response.json();
};

export const getMealById = async (id: string): Promise<DbMeal> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch meal with id ${id}`);
  }
  return response.json();
};

export const createMeal = async (meal: DbMeal): Promise<DbMeal> => {
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

export const updateMeal = async (id: string, meal: Partial<DbMeal>): Promise<DbMeal> => {
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

export const deleteMeal = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete meal with id ${id}`);
  }
};