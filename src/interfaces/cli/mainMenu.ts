import { askQuestion } from '../../shared/inputHandler';

export async function mainMenu(): Promise<string> {
 
  console.log(`\n Menu \n
    1. Add Contact
    2. Contacts
    3. Exit
    `);
  return await askQuestion('Choose an option: ');
}