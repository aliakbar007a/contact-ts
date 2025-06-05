import { askQuestion } from '../../../../core/inputHandler';

export async function selectTagIndex(contactCount: number): Promise<number> {
  const input = await askQuestion('Enter the number of the contact to edit tag: ');
  const index = Number(input) - 1;

  if (isNaN(index) || index < 0 || index >= contactCount) {
    console.log('Invalid selection.');
    return selectTagIndex(contactCount);
  }

  return index;
}