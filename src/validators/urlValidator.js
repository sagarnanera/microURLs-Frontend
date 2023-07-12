const joi = require("joi");

const urlValidator = joi.object({
    Original_URL: joi.string().uri().required().messages({
        'string.uri': 'Provide a valid URL !!!',
        'string.empty': 'Provide long URL !!!'
    }),
    customSlug: joi.string().regex(/^[a-zA-Z0-9]+$/).min(6).messages({
        'string.pattern.base': 'customSlug can only contain uppercase and lowercase letters, and numbers',
        'string.min': 'customSlug must be at least 6 characters long !!!'
    })
});

const editURLValidator = joi.object({
    id: joi.string().required(),
    updatedSlug: joi.string().regex(/^[a-zA-Z0-9]+$/).min(6).messages({
        'string.pattern.base': 'customSlug can only contain uppercase, lowercase letters and numbers',
        'string.min': 'customSlug must be at least 6 characters long !!!'
    })
});

export { urlValidator, editURLValidator };

// exports.deleteURLValidator = joi.object({
//     id: joi.string().required(),
// });