import MacroBudget from "../interfaces/budget.interface";

const API_URL = `${import.meta.env.VITE_API_URL}/api/profile/budget`;

export async function createBudget(budget: MacroBudget): Promise<MacroBudget> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(budget),
  });
  return response.json();
}

export async function getBudget(id: number): Promise<MacroBudget> {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function updateBudget(budget: MacroBudget): Promise<MacroBudget> {
  const response = await fetch(`${API_URL}/${budget.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(budget),
  });
  return response.json();
}

export async function deleteBudget(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}