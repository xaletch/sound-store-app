export function GetAuthToken(name: string) {
  const token = localStorage.getItem(name);

  if (!token) {
    return null;
  }

  const item = JSON.parse(token);
  const now = new Date().getTime();

  if (now > item.expiry) {
    localStorage.removeItem(name);
    console.log('Токен устарел');
    return null;
  }

  return item.value;
}