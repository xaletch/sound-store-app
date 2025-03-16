export function GetAuth(name: string) {
  const token = localStorage.getItem(name);

  if (!token) {
    return null;
  }

  const item = JSON.parse(token);
  const now = new Date().getTime();

  if (now > item.expiry) {
    localStorage.removeItem(name);
    console.log('Данные устарели');
    return null;
  }

  return item.value;
}