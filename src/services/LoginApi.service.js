import { HttpService } from './HttpService.service';
import parser from 'fast-xml-parser';

const LoginApi =  async (usuario) => {

    console.log(usuario);

    return await HttpService(`/servico01?a=1&b=${usuario.usuario}&c=${usuario.senha}`)
        .then(xml => {
            try {
                if( parser.validate(xml) === true) {
                    var jsonObj = parser.parse(xml);
                    
                    return jsonObj.resposta;
                } 
                else {
                    throw new Error('Erro ao fazer o parse do xml');
                }
            }
            catch(err) {
                throw err;
            }
        })
        .catch(err => {
            throw err;
        });
}

export default LoginApi;