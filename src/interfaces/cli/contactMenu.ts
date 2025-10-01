import { askQuestion } from '../../shared/inputHandler';

export async function contactMenu(): Promise<string> {
 
  console.log(`\n Menu \n
    1. show Contact
    2. edit
    3. delete
    4. editTag
    5. Exit
    `);
  return await askQuestion('Choose an option: ');
}