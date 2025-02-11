import Profile from "../interfaces/profile.interface";

const API_URL = `${import.meta.env.VITE_API_URL}/api/profile`;

export async function createProfile(profile: Profile): Promise<Profile> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  return response.json();
};

export async function getProfiles(): Promise<Profile[]> {
  const response = await fetch(API_URL);
  return response.json();
};

export async function getProfileById(id: number): Promise<Profile> {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export async function updateProfile(id: number, profile: Profile): Promise<Profile> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  return response.json();
};

export async function deleteProfile(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};