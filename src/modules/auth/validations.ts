import { Joi } from "express-validation";
import { SignInBodyI } from "../../interfaces/signIn.Interface";
import {
  validEmailRequired,
  validStringRequired,
} from "../../helpers/validations";

export const signInValidations = {
  body: Joi.object<SignInBodyI>().keys({
    email: validEmailRequired("email"),
    password: validStringRequired("password"),
    nombres: validStringRequired('nombres'),
    apellidos: validStringRequired('apellidos'),
    fechaNacimiento: validStringRequired('nombres'),
    identificacion:  validStringRequired('identificacion'),
  }),
};

export const signUpValidation = {
    body: Joi.object<SignInBodyI>().keys({
        email: validEmailRequired("email"),
        password: validStringRequired("password"),
      }),
}