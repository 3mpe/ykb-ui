import { DEFAULT_API_CONFIG } from "./Api.config";

class Api {

    constructor() {
        this.config = DEFAULT_API_CONFIG
    }

    get(url, params) {
        return this.request(url, params, 'GET');
    }

    post(url, params) {
        return this.request(url, params, 'POST');
    }

    put(url, params) {
        return this.request(url, params, 'PUT');
    }

    delete(url, params) {
        return this.request(url, params, 'DELETE');
    }

    request(url, params = "", method = "GET") {
        if (!url) {throw new Error("Url is required"); }


        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(method, this.config.baseUrl + url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const parsedResponse = JSON.parse(xhr.response);
                    resolve(parsedResponse);
                }
                else { reject({ status: xhr.status, statusText: xhr.statusText }); }
            };
            xhr.onerror = () => {
                reject({ status: xhr.status,  statusText: xhr.statusText });
            };

            if (params) {
                xhr.send(JSON.stringify(params));
            }
            else {
                xhr.send();
            }
        });
    }

    getConfig() {
        return this.config;
    }

}

export default new Api();