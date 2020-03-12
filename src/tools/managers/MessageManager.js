import{ Connexion } from '../config/Connexion';
import { Message } from '../objects/Message';
import { AuthentificationManager } from '../managers/AuthentificationManager';

/**
 * objet qui gère les messages et peut faire des requêtes en api
 * est utilisé par les composants
 * 
 * @author : Francois Macko
 */
export class MessageManager {

    request = new Connexion();
    auth = new AuthentificationManager();
    url = "message";

    constructor() {

    }

    /**
     * crée un objet message correspondant au formulaire 
     * envoi une requête POST pour le rajouter en base
     * @param {*} form : données récupérées du formulaire
     */
    create(form) {

        let message = new Message(null, this.auth.extractStorage().username, form);
        this.request.preparedRequest(this.url, "create");
        this.request.sendRequest(JSON.stringify(message));
    }

    /**
     * récupère la liste des messages. utilise les promises
     */
    read() {

        console.log("entrée sur read");
        
        this.request.preparedRequest(this.url, "read");
        return this.request.sendRequest(null).then(function(response){

            return response;
        });
    }

    /**
     * crée un objet message correspondant au formulaire 
     * envoi une requête PUT pour le modifier en base
     * @param {*} form : données récupérées du formulaire
     */
    update(form) {

        let message = new Message(form.id, this.auth.extractStorage().username, form.content);
        this.request.preparedRequest(this.url, "update");

        this.request.sendRequest(JSON.stringify(message));    
    }

    /**
     * crée un objet message correspondant au formulaire 
     * envoi une requête POST pour le supprimer en base
     * @param {*} form : données récupérées du formulaire
     */
    delete(form) {

        let message = new Message(form.id, this.auth.extractStorage().username, form.content);
        this.request.preparedRequest(this.url, "delete");

        this.request.sendRequest(JSON.stringify(message));        
    }
}

export default MessageManager;