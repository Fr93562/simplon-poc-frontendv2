
/**
 * Objets des données de tests
 * 
 * @author : François Macko
 */
export class Fixture {

    dataMessage = [
        {
            "id": 1,
            "username": "Mickael",
            "content": "Bonjour tout le monde!"
        },
        {
            "id": 2,
            "username": "Sarah",
            "content": "La forme?"
        },
        {
            "id": 3,
            "username": "Mickael",
            "content": "Super et toi??"
        },
        {
            "id": 5,
            "username": "Sarah",
            "content": "Bien!"
        },
        {
            "id": 6,
            "username": "Mickael",
            "content": "Je te propose de sortir au restaurant ce soir."
        }
    ];

    dataUser = {
        "id": 1,
        "username": "Mickael",
        "password0": "je sais plus",
        "email": "test@test.fr"
    }

    dataAuth = {

        "username": "Mickael",
        "token": "abcdef132456789"
    }

    constructor() {

    }

    getDataMessage() {

        return this.dataMessage;
    }

    getDataIser() {

        return this.dataUser;
    }

    getDataAuth() {

        return this.dataAuth;
    }

    addDataMessage(message) {

        this.dataMessage.push(message);
    }
}

export default Fixture;