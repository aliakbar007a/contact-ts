
import { handleShow } from './domain/modle/handleShow';
import { handleEdit } from './domain/modle/handleEdit';
import { handleDelete } from './domain/modle/handleDelete';
import { handleEditTag } from './domain/modle/handleEditTag';
import { closeInput } from './shared/inputHandler';
import { contactMenu } from './interfaces/cli/contactMenu';

export async function switchContact(): Promise<void> {
  const choice = await contactMenu();
  switch (choice) {
    case '1': {
      await handleShow();
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
   switchContact();
}