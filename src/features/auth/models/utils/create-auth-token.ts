export function CreateAuthToken(name: string, value: string): void {
  const now = new Date().getTime();

  const data = {
    value: value,
    expiry: now + 24 * 60 * 60 * 1000, // длительность сессии - 24ч.
  };

  localStorage.setItem(name, JSON.stringify(data));
};