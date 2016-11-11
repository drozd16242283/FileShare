import Joi from 'joi'

const validateSignUp = (formData, callback) => {
    const { username, email, password } = formData

    const schema = Joi.object().keys({
        username: Joi.string().min(3).max(30),
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    })

    Joi.validate(
        { username: username, email: email, password: password },
        schema,
        callback
    )
}

export default validateSignUp
