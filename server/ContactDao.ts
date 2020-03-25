import Contact from "./Contact";
import { injectable, inject } from "inversify";
import { Repository } from "typeorm";
import TYPES from "./types";

export interface IContactDao {
    save(contactRequest: Contact): Promise<Contact>;
    readonly test: string;
    // getById(id: number): Contact;
}

@injectable()
export default class ContactDao implements IContactDao {
    @inject(TYPES.IContactRepository)
    contactRepo: Repository<Contact>
    test: string;
    async save(contact: Contact): Promise<Contact> {
        const newContact = await this.contactRepo.save(contact);
        return newContact;
    }
}