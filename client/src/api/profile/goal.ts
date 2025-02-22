import Goals from "../interfaces/goal.interface";

const API_URL = `${import.meta.env.VITE_API_URL}/api/profile/goal`;

export async function createGoal(goal: Goals): Promise<Goals> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goal),
  });
  return response.json();
}

export async function getGoals(): Promise<Goals[]> {
  const response = await fetch(API_URL);
  return response.json();
}

export async function getGoalById(id: number): Promise<Goals> {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function updateGoal(id: number, goal: Goals): Promise<Goals> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goal),
  });
  return response.json();
}

export async function deleteGoal(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}