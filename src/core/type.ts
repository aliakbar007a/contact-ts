export interface Contact {
  name: string;
  phone: string;
  tag: string;
}

export interface ContactRepository {
  read: () => Contact[];
  writeAll(contacts: Contact[]): void;
  add(newContact: Contact): void;
}


export interface updateContact {
    preName: string;
    newName: string;
    newPhone: string;
    newTag: string;
}