import React from 'react';

import { Messagelist } from '../components/contenairs/MessageList';
import { MessageSent } from '../components/forms/MessageSent';

import { MessageManager } from '../tools/managers/MessageManager';
import { UserManager } from '../tools/managers/UserManager';
import { AuthentificationManager } from '../tools/managers/AuthentificationManager'

import { Fixture } from '../tools/tests/Fixture';


export class MessageComponent extends React.Component {

    messageManager = new MessageManager();
    messageHistory = this.messageManager.read().then(function(result) { return result; });
    authentificationManager = new AuthentificationManager();

    /**
     * propriétées hérites du composant parent
     * @param {*} props 
     */
    constructor(props) {

        super(props);
        this.state = {} 
    }

    messageLoad() {

        this.setState({ 
            messageList: this.messageManager.read().then(function(result) { return result; })
        });
    }


    /**
     * code html renvoyé
     */
    render() {

        console.log(this.state);
        //this.messageLoad();
        console.log(this.state);



        return (

            <div>
                <header className="App-header">

                    <h1>Bonjour, test</h1>
                    <div>
                        <i id="App-logo" className="fas fa-spinner fa-3x"></i>
                    </div>

                </header>
                <section className="App-body">

                        {/* < Messagelist messageHistory={ this.messageHistory } dataUser = { this.authentificationManager.extractStorage()}/> */}
                        < Messagelist messageHistory={ this.messageManager.read().then(function(result) { return result; })} dataUser = { this.authentificationManager.extractStorage()}/>

                        <MessageSent />

                </section>

            </div>
        );
    }
}

export default MessageComponent