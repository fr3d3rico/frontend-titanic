import Joi from 'joi';

const loginValidation = (data) => {

    const usuario_tamanho_minimo = 6;
    const senha_tamanho_minimo = 6;

    const Schema = Joi.object({
        usuario: Joi.string().min(usuario_tamanho_minimo).required().error(new Error(`Usuário deve ter no mínimo ${usuario_tamanho_minimo} caracteres`)),
        senha: Joi.string().min(senha_tamanho_minimo).required().error(new Error(`Senha deve ter no mínimo ${senha_tamanho_minimo} caracteres`))
    });

    return Schema.validate(data);
}

export default loginValidation;