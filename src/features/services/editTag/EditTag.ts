

import { FileContactRepository } from '../../../core/fileContactRep';
import { Tag } from './tagEnum';

export function EditTag(index: number, newTag: Tag): boolean {
  const repsitory = new FileContactRepository
  try {
    const contacts = repsitory.read();
    contacts[index].tag = newTag;
    repsitory.writeAll(contacts);
    return true;
  } catch (err) {
    console.error('Failed to update tag:', err);
    return false;
  }
}