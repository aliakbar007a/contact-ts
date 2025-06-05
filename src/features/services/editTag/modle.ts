import { getContactList } from './input/getChoices';
import { selectTagIndex } from './input/selectTagIndex';
import { getTagChoices } from './input/choicesTag';
import { EditTag } from './EditTag';
import { selectNewTag } from './input/selectNewTag';
import { printContact } from './output/printContact';
import { showResult } from './output/showResult';

export async function handleEditTag(): Promise<void> {
  const contactList = getContactList();
  printContact('Available contacts:', contactList);
  const index = await selectTagIndex(contactList.length);

  const tagList = getTagChoices();
  printContact('Choose new tag:', tagList);
  const newTag = await selectNewTag();

  const result = EditTag(index, newTag);
  showResult(result);
}