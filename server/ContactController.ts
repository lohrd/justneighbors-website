import * as express from "express";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  queryParam,
  response,
  requestParam,
  requestBody
} from "inversify-express-utils";
import { injectable, inject } from "inversify";
import TYPES from "./types";
// import ContactViewModel from "../view-models/ContactViewModel";
import { validate } from "express-validation";
import * as Joi from "joi";
import ContactValidator from "./ContactValidator";
import Contact from "./Contact";
import { IContactDao } from "./ContactDao";

@controller("/contact")
export class ContactController implements interfaces.Controller {
  @inject(TYPES.IContactDao)
  readonly contactDao: IContactDao;

  @httpPost("/")
  async createContact(@requestBody() newContact: Contact, req: express.Request, res: express.Response): Promise<Contact> {
    const savedContact = await this.contactDao.save(newContact);
    return savedContact
  };
};
