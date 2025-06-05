import { Tag } from '../tagEnum';
export function getTagChoices(): string[] {
  return Object.values(Tag).map((tag, i) =>` ${i + 1}. ${tag}`);
}