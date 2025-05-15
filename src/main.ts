import { contactMenu } from './ui/contactMenu';
import { handleAdd } from './features/handlers/hamdleAdd/hamdleAdd';
import { handleEdit } from './features/handlers/handleEdit/handleEdit';
import { handleDelete } from './features/handlers/handleDelete/handleDelete';

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
    case '4':
      console.log('Goodbye!');
      return; 
    default:
      console.log('Invalid choice.');
  }
  await main();
}