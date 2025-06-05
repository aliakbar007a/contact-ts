import { getContactList } from './input/getChoices';
import { selectTagIndex } from './input/selectTagIndex';
import { EditTag } from './EditTag';
import { printContact } from './output/printContact';
import { editTagResult } from './output/editTagResult';
import { askTag } from '../../../ui/askTag';

export async function handleEditTag(): Promise<void> {
  const contactList = getContactList();
  printContact('Available contacts:', contactList);
  const index = await selectTagIndex(contactList.length);
  const newTag = await askTag();

  const result = EditTag(index, newTag);
  editTagResult(result);
}