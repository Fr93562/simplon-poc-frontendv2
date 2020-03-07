import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MessageManager } from '../src/tools/managers/MessageManager';
import { UserManager } from '../src/tools/managers/UserManager';
import { AuthentificationManager } from '../src/tools/managers/AuthentificationManager'

function App() {

  let messageManager = new MessageManager();
  let userManager = new UserManager();
  let authentificationManager = new AuthentificationManager();
  // tests de l'accès des méthodes - à supprimer à la fin
  // let accessMessageManag = [messageManager.create(), messageManager.delete(), messageManager.update(), messageManager.read()];
  // let accessUserManag = [userManager.create(), userManager.delete()];
  // let accessAuthManag = [authentificationManager.login(), authentificationManager.logout()];

  authentificationManager.addStorage();
  let test = {
    "username": "Mickael",
    "password": "je sais plus",
    "email": "test@test.fr"
  };
  userManager.create(test);

  /*
  messageManager.read().then(function(response){

    console.log(response);
  });;
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
