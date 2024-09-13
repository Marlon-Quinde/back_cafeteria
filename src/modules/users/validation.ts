import { Joi } from "express-validation";
import { User } from "../../entities/User";
import { validStringRequired } from "../../helpers/validations";

export const createUserValidations = {
  body: Joi.object<User>().keys({
    nombres: validStringRequired('nombres'),
    apellidos: validStringRequired('nombres'),
    fechaNacimiento: validStringRequired('nombres'),
    password: validStringRequired('password'),
    identificacion: validStringRequired('nombres'),
    email: validStringRequired('nombres'),
  })
};
