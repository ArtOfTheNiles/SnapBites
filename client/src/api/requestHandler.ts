export const requestHandler = async (url: string, method: string, options?: string[], data?: unknown) => {
  const response = await fetch(url, {
    method: method,
    ...options,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};