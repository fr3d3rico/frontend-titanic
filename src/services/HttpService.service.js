import Api from '../config/Api.config';

export const HttpService = (endpoint) =>
    fetch(Api.url + endpoint)
        .then(response => response.json());