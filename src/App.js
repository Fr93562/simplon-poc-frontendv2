import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MessageComponent } from '../src/components/MessageComponent';

import { MessageManager } from '../src/tools/managers/MessageManager';
import { UserManager } from '../src/tools/managers/UserManager';
import { AuthentificationManager } from '../src/tools/managers/AuthentificationManager'

import { Fixture } from '../src/tools/tests/Fixture';

function App() {

  let messageManager = new MessageManager();
  let userManager = new UserManager();
  let authentificationManager = new AuthentificationManager();
  let dataTest = new Fixture();
  // tests de l'accès des méthodes - à supprimer à la fin
  // let accessMessageManag = [messageManager.create(), messageManager.delete(), messageManager.update(), messageManager.read()];
  // let accessUserManag = [userManager.create(), userManager.delete()];
  // let accessAuthManag = [authentificationManager.login(), authentificationManager.logout()];

  authentificationManager.addStorage();
  //userManager.create(test);

  /*
  messageManager.read().then(function(response){

    console.log(response);
  });;
  */

  return (
    <div className="App">

    < MessageComponent />


    <footer className="App-footer">

      <p>Francois Macko </p>
      <div>
        <i className="fas fa-copyright fa-1x"></i>
      </div>
      <a className="App-link" href=" https://github.com/Fr93562/simplon-poc-frontend" target="_blank">projet git</a>

    </footer>
  </div>
  );
}

export default App;
