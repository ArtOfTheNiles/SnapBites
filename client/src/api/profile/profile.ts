import Profile from "../interfaces/profile.interface";

const API_URL = '/api/profile';

export const createProfile = async (profile: Profile): Promise<Profile> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  return response.json();
};

export const getProfiles = async (): Promise<Profile[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getProfileById = async (id: number): Promise<Profile> => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const updateProfile = async (id: number, profile: Profile): Promise<Profile> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  });
  return response.json();
};

export const deleteProfile = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};