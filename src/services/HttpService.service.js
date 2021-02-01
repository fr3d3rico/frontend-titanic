import Api from '../config/Api.config';

export const ApiResponseCodigo = {
    loginOK: 'OK',
    loginERRO: 'ERRO'
};

export const HttpService = (endpoint) =>
    fetch(Api.url + endpoint)
        .then(response => response.text());