import { Joi } from "express-validation";
import { Usuario } from "../../entities/Usuario";
import { validStringRequired } from "../../helpers/validations";

export const createUserValidations = {
  body: Joi.object<Usuario>().keys({
    nombres: validStringRequired('nombres'),
    apellidos: validStringRequired('nombres'),
    fechaNacimiento: validStringRequired('nombres'),
    password: validStringRequired('password'),
    identificacion: validStringRequired('nombres'),
    email: validStringRequired('nombres'),
  })
};
