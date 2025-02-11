import LoginData from "../interfaces/loginData.interface";

export async function login(userInfo: LoginData) {
  try {
    const response = await fetch('/auth/login', {
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
