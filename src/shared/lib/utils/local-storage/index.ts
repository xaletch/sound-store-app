export function DeleteStorage (name: string): void {
  localStorage.removeItem(name);
}