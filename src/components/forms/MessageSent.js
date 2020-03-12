import React from 'react';

import { MessageManager } from '../../tools/managers/MessageManager';

/**
 * gère le formulaire de l'envoie des messages
 */
export class MessageSent extends React.Component {

    messageManager = new MessageManager();
    /**
     * propriétées hérites du composant parent
     * @param {*} props 
     */
    constructor(props) {

        super(props);
        this.state = { value: '', operation: 'send' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * prends en compte les changements lors l'événement
     * @param {*} event : corresponds au changement de valeur du formulaire
     */
    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    /**
     * prends en charge les changements lors de l'événement
     * envoie les résultats à la classe qui rajoute les messages
     * @param {*} event : corresponds au submit du formulaire
     */
    handleSubmit(event) {

        this.messageManager.create(this.state.value);
        event.preventDefault();
    }

    /**
     * corresponds au rendu HTML
     */
    render() {
        return (
            <form className="formSent" onSubmit={this.handleSubmit}>
                <input className="formArea" type="textArea" value={this.state.value} onChange={this.handleChange} />
                <input className="formButton" type="submit" value="Envoyer" />
            </form>
        );
    }
}

export default MessageSent