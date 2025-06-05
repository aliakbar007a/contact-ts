export function printContact(label: string, items: string[]): void {
  console.log(label);
  items.forEach(item => console.log(item));
}