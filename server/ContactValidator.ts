import * as Joi from "joi";

class ContactValidator {
  createContact= {
    body: {
      name: Joi.string().required(),
      email: Joi.number().integer().positive().required(),
      request: Joi.string().required()
    }
  }
}

export default new ContactValidator();
