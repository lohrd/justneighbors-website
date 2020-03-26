import { ContainerModule } from "inversify";
import TYPES from "./types";
import ContactDao from "./ContactDao";
import { IContactDao } from "./ContactDao";
import { Repository, getRepository } from "typeorm";
import Contact from "./Contact";

import "./ContactController" // auto-binding courtesy of the utils


export const bindings = new ContainerModule(bind => {

    bind<IContactDao>(TYPES.IContactDao).to(ContactDao);
    bind<Repository<Contact>>(TYPES.IContactRepository).toDynamicValue(() => {
        return getRepository(Contact);
    }).inRequestScope();
});

