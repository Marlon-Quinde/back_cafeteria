import { Joi } from "express-validation";

export const validStringRequired = (property: string) =>
  Joi.string()
    .required()
    .min(1)
    .messages({
      "any.required": `"${property}" es requerido.`,
      "string.base": `"${property}" debe ser texto.'`,
      "string.min": `"${property}" debe tener mínimo ${1} caracteres.`,
    });

export const validEmailRequired = (property: string) =>
  Joi.string()
    .email()
    .required()
    .messages({
      "any.required": `"${property}" es requerido.`,
      "string.base": `"${property}" debe ser texto.'`,
      "string.email": `"${property}" no tiene un formato valido.'`,
    });
