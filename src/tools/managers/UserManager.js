import{ Connexion } from '../config/Connexion';
import { User } from '../objects/User';
import { AuthentificationManager } from '../managers/AuthentificationManager';

/**
 * objet qui gère les messages et peut faire des requêtes en api
 * est utilisé par les composants
 */
export class UserManager {

    request = new Connexion();
    auth = new AuthentificationManager();
    url = "user";

    constructor() {

    }

    /**
     * crée un objet message correspondant au formulaire 
     * envoi une requête POST pour le rajouter en base
     * @param {*} form : données récupérées du formulaire
     */
    create(form) {

        let user = new User(null, form.username, form.password, form.email);

        this.request.preparedRequest(this.url, "create");
        this.request.sendRequest(JSON.stringify(user));
    }

    /**
     * crée un objet message correspondant au formulaire 
     * envoi une requête POST pour le supprimer en base
     * @param {*} form : données récupérées du formulaire
     */
    delete(form) {

        let user = new User(form.id, this.auth.extractStorage().username, form.content);
        this.request.preparedRequest(this.url, "delete");

        //this.request.sendRequest(JSON.stringify(user));        
    }
}

export default UserManager;