import Joi from 'joi';

const loginValidation = (data) => {
    const Schema = Joi.object({
        usuario: Joi.string().min(6).required().error(new Error('Usuário deve ter no mínimo 6 caracteres')),
        senha: Joi.string().min(6).required().error(new Error('Senha deve ter no mínimo 6 caracteres'))
    })

    return Schema.validate(data);
}

export default loginValidation;