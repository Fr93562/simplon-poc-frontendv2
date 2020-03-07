/**
 * objet qui a contenir les données utilisées pour l'authentification
 * 
 * @author : Francois Macko
 */
export class Authentification {

    username = "";
    token = "";

    constructor(username, token) {

        this.setUsename(username);
        this.setToken(token);
    }

    // Méthodes getters et setters
    getUsername() {

        return this.username;
    }

    setUsename(username) {

        this.username = username;
    }

    getToken() {

        return this.token;
    }

    setToken(token) {

        this.token = token;
    }
}

export default Authentification;