import { HttpService } from './HttpService.service';

const LoginApi = (usuario) => {

    console.log(usuario);
    HttpService('/login')
        .then(data => {
            /* do what you want to do in promise resolve callback function */
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

}

export default LoginApi;