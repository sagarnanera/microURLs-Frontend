const joi = require('joi')

const LoginValidator = joi.object({
    email: joi.string().email({ tlds: { allow: false } }).required(),
    password: joi.string().required()
})


const SignupValidator = joi.object({
    userName: joi.string().max(15).required(),
    email: joi.string().email({ tlds: { allow: false } }).required(),
    password: joi.string().min(6).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).messages({
        'any.only': "Confirm password should same as password !!!"
    })
})

const passwordValidator = joi.object({ password: joi.string().min(6).required() });

const emailValidator = joi.object({ email: joi.string().email({ tlds: { allow: false } }).required() });

export { LoginValidator, SignupValidator, passwordValidator, emailValidator };