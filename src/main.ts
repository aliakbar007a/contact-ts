import { mainMenu } from './interfaces/cli/mainMenu';
import { handleAdd } from './domain/modle/handleAdd';
import { closeInput } from './shared/inputHandler';
import { switchContact } from './switchContact';

export async function main(): Promise<void> {
  const choice = await mainMenu();
  switch (choice) {
    case '1': {
      await handleAdd();
      break;
    }
    case '2': {
     await switchContact();
      break;
    }
    case '3':
      console.log('Goodbye!');
      closeInput();
      return; 
    default:
      console.log('Invalid choice.');
  }
   main();
}