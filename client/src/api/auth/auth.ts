import LoginData from "../interfaces/loginData.interface";
const API_URL = `${import.meta.env.VITE_API_URL}`;

export async function login(userInfo: LoginData) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
