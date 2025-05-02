import { askQuestion } from './inputHandler';

export async function contactMenu(): Promise<string> {
 
  console.log(`\n Menu \n
    1. Add Contact
    2. Edit Contact
    3. Delete Contact 
    4. Exit
    `);
  return await askQuestion('Choose an option: ');
}