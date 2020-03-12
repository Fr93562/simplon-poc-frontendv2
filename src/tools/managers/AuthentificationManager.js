import { Fixture } from '../tests/Fixture';

/**
 * objet qui gère les messages et peut faire des requêtes en api
 * est utilisé par les composants
 */
export class AuthentificationManager {

    objectAuth = new Fixture(); // à remplacer par object auth à la fin
    auth = this.objectAuth.getDataAuth(); // sera utilisé pour sessiontu présn

    constructor() {

    }

    // Méthodes getters et setters
    getAuth() {

        return this.auth;
    }

    /**
     * gère la connexion en contactant l'api
     */
    login() {

        console.log("login");
    }

    /**
     * mets fin à la session
     */
    logout() {

        console.log("logout");
    }

    /**
     * appelé après une authentification réussie
     * ajoute les données à sessionStorage
     */
    addStorage() {

        sessionStorage.setItem("session" , JSON.stringify(this.getAuth()));
    }

    /**
     * récupère les données de storage
     */
    extractStorage() {

        return JSON.parse(sessionStorage.getItem("session"));
    }

    /**
     * indique si l'utilisateur est connecté
     * renvoie false par defaut : non connecté
     * true si une session existe dans le storage
     */
    logState() {

        let output = false;

        if (JSON.parse(sessionStorage.getItem("session")) != undefined) {

            output = true;
        }

        return output;
    }


}

export default AuthentificationManager;