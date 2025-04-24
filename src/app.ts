import { askQuestion } from './inputHandler';
import { saveContact } from './contactService';
import { isValidName, isValidPhone } from './validation';
import { Contact } from './type';

async function askAndSaveContact(): Promise<void> {
  const name = await askQuestion("Enter name: ");
  const phone = await askQuestion("Enter phone: ");

  if (!isValidName(name)) {
    console.log("Error: Name must contain at least 3 words.");
    return askAndSaveContact();
  }

  if (!isValidPhone(phone)) {
    console.log("Error: Phone must be a number between 10 to 15 digits.");
    return askAndSaveContact();
  }

  const newContact: Contact = { name, phone };
  saveContact(newContact);
  console.log("Contact saved successfully!\n");

  const again = await askQuestion("Would you like to add another contact? (y/n): ");
  if (again.toLowerCase() === 'y') {
    return askAndSaveContact();
  } else {
    console.log("Goodbye!");
  }
}

askAndSaveContact();
