import { askQuestion } from '../../../../core/inputHandler';
import { Tag } from '../tagEnum';

export async function selectNewTag(): Promise<Tag> {
  const input = await askQuestion('Enter number: ');
  const index = Number(input) - 1;
  const tags = Object.values(Tag);

  if (isNaN(index) || index < 0 || index >= tags.length) {
    console.log('Invalid choice.');
    return selectNewTag();
  }
  
  return tags[index];
}