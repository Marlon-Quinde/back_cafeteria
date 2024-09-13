import { Joi } from "express-validation";

export const validStringRequired = (propiedad: string) =>
    Joi.string()
      .required()
      .min(1)
      .messages({
        "string.empty": `"${propiedad}" es requerido`,
        "string.base": `"${propiedad}" debe ser texto'`,
        "string.min": `"${propiedad}" debe tener mínimo ${1} caracteres`,
      });