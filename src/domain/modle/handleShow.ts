import { getContactList } from "../../application/contacts/show/showContact";
import { FileContactRepository } from "../../infrastructure/repositories/fileContactRep";
import { showPresenters } from "../../interfaces/cli/presenters/showPresenters";

const repository = new FileContactRepository();

export async function handleShow(): Promise<void> {
    const contactList = getContactList();
    showPresenters(contactList)
}