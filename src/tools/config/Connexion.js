import React from 'react';

/**
 * Objet qui gère la connexion à l'Api
 * @author: François Macko
 */
export class Connexion {

    type = 'json';
    dataType = null;

    url = 'http://localhost:8080/';
    urlPrepared = null;

    method = { "create": 'POST', "read": 'GET', "update": 'PUT', "delete": 'DELETE' };
    methodPrepared = null;

    constructor() {

    }

    /**
     * Prépare la requête qui sera envoyé en Json
     * @param {*} urlRequest : indique l'adresse de la requête 
     * @param {*} urlMethod : indique le type de requête
     */
    preparedRequest(urlRequest, urlMethod) {

        this.urlPrepared = this.url + urlRequest;
        this.methodPrepared = this.method[urlMethod];
    }

    /**
     * Envoie la requête avec les paramètres chargés
     * Renvoie une réponse au format Json
     */
    sendRequest(data) {

        let promiseMethod = this.methodPrepared;
        let promiseUrl = this.urlPrepared;
        let promiseType = this.type;

        return new Promise(function (resolve, reject) {

            var request = new XMLHttpRequest()

            request.open(promiseMethod, promiseUrl);
            request.responseType = promiseType;
            request.setRequestHeader("Content-Type", "application/json");
            request.send(data);

            request.onload = function () {

                resolve(request.response);
            }
        });
    }
}

export default Connexion