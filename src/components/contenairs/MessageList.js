import React from 'react';

import { MessageAlone } from './MessageAlone';

export class Messagelist extends React.Component {

    asyncMessageHistory = null;
    messageHistory = null;
    messageExplode = null;

    /**
     * propriétées hérites du composant parent
     * @param {*} props 
     */
    constructor(props) {

        super(props);

        this.asyncmessageHistory = this.props.messageHistory;
        this.props.messageHistory.then(response => {

            this.messageHistory = response;
            this.setState({ messageHistory: response });
        });
    }

    /**
     * transforme la liste de messages en plusieurs composant message
     */
    listExplode() {

        this.messageExplode = this.messageHistory.map((messageAlone) =>
    
        <MessageAlone key={messageAlone.id} messageData={messageAlone} userData={this.props.dataUser.username}/>
      );
    }

    /**
     * code html renvoyé
     */
    render() {

        if (this.messageHistory != null) {

            this.listExplode();
            console.log(this.messageExplode);
        }

        return (
        
            <div className="mesageContenair">

                { this.messageExplode }
                
            </div>
        );
    }
}

export default Messagelist