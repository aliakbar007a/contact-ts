import { contactMenu } from './ui/contactMenu';
import { handleAdd } from './features/services/add/modle';
import { handleEdit } from './features/services/edit/modle';
import { handleDelete } from './features/services/delete/modle';
import { handleEditTag } from './features/services/editTag/modle';
import { closeInput } from './core/inputHandler';

export async function main(): Promise<void> {
  const choice = await contactMenu();
  switch (choice) {
    case '1': {
      await handleAdd();
      break;
    }
    case '2': {
     await handleEdit();
      break;
    }
    case '3': {
      await handleDelete();
      break;
    }
    case '4': {
      await handleEditTag();
      break;
    }
    case '5':
      console.log('Goodbye!');
      closeInput();
      return; 
    default:
      console.log('Invalid choice.');
  }
   main();
}