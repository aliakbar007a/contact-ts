import { askQuestion } from './inputHandler';
import { isValidName } from './validationName';
import { isValidPhone } from './validationPhone';
import { addContact } from './addContact';
import { editContact, findName } from './editContact';
import { deleteContact } from './deleteContact';
import { contactMenu } from './contactMenu';

export async function main(): Promise<void> {
  const choice = await contactMenu();

  switch (choice) {
    case '1': {
      const name = await askQuestion('Enter name: ');
      if(!isValidName(name)){
        console.log('Invalid name .');
       break;
      }
      const phone = await askQuestion('Enter phone: ');
      if(!isValidPhone(phone)){
        console.log('Invalid phone number.');
        break;
      }
        addContact({ name, phone });
      break;
    }

    case '2': {
      const editName = await askQuestion('Enter name to edit: ');
      if(findName(editName)){
        break;
      }
      const newName = await askQuestion('Enter new name: ')
      const newPhone = await askQuestion('Enter new phone: ');
      if (isValidName(newName) && isValidPhone(newPhone)) {
        editContact(editName, newName, newPhone);
      } else {
        console.log('Invalid name , phone number.');
      }
      break;
    }

    case '3': {
      const delName = await askQuestion('Enter name to delete: ');
      deleteContact(delName);
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