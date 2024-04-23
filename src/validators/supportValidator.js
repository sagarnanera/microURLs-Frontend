import joi from "joi";


export const contactUsValidator = joi.object({
    name: joi.string().max(20).allow(''),
    email: joi.string().email({ tlds: { allow: false } }).required(),
    message: joi.string().max(1500).required(),
})
