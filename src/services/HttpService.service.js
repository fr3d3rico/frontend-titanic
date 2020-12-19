import Api from '../config/Api.config';

const HttpService = () => {

    return {
        httpAsync: httpAsync,
        httpSync: httpSync,
    };

}

const httpAsync = (endpoint) => {
    fetch(Api.url + endpoint)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(e => {
            console.log(e);
        });
}

const httpSync = async (endpoint) => {
    await fetch(Api.url + endpoint)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(e => {
            console.log(e);
        });
}

export default HttpService;