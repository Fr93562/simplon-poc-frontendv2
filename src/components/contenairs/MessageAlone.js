import React from 'react';

export class MessageAlone extends React.Component {

    userAuth = "";
    userMessage = "";
    content = "";

    creatorMessage = false;
    typeMessage = {
        "otherDiv": "otherDiv",
        "other": "otherMessage",
        "selfDiv": "selfDiv",
        "self": "selfMessage",
    };

    /**
     * propriétées hérites du composant parent
     * @param {*} props 
     */
    constructor(props) {

        super(props);
        this.userAuth = this.props.userData;
        this.userMessage = this.props.messageData.username;
        this.content = this.props.messageData.content;
    }

    /**
     * vérifie si l'user du message corresponds à celui qui est authentifé
     * passe creatorMessage en true si la conditin est remplie
     */
    checkAuthor() {

        if (this.userAuth === this.userMessage) {

            this.creatorMessage = true;
        }
    }

    /**
     * code html renvoyé
     */
    render() {

        this.checkAuthor();

        return (
            <div className={(this.userAuth == this.userMessage ? this.typeMessage['selfDiv'] : this.typeMessage['otherDiv'])}>

                <p className={(this.userAuth == this.userMessage ? this.typeMessage['self'] : this.typeMessage['other'])}>{this.userMessage}: {this.content}</p>
    
            </div>
        );
    }
}

export default MessageAlone

