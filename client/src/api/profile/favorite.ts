const API_URL = '/api/profile/favorite';

interface Favorites {
  id: number;
  profile: number;
}

export async function createFavorite(favorite: Favorites): Promise<Favorites> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(favorite),
  });
  return response.json();
}

export async function getFavorite(id: number): Promise<Favorites> {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function updateFavorite(id: number, favorite: Favorites): Promise<Favorites> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(favorite),
  });
  return response.json();
}

export async function deleteFavorite(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}