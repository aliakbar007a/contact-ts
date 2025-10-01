import { getContactList } from '../../application/contacts/editTag/input/getChoices';
import { selectTagIndex } from '../../application/contacts/editTag/input/selectTagIndex';
import { EditTag } from '../../application/contacts/editTag/EditTag';
import { printContact } from '../../application/contacts/editTag/output/printContact';

import { askTag } from '../../interfaces/cli/prompts/askTag';

export async function handleEditTag(): Promise<void> {
  const contactList = getContactList();
  printContact('Available contacts:', contactList);
  const index = await selectTagIndex(contactList.length);
  const newTag = await askTag();

  const result = EditTag(index, newTag);
  
}