import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Inbox } from 'gmail-inbox';

async function exeCuteMe(){
  let inbox = new Inbox('credentials.json');
  await inbox.authenticateAccount(); // logs user in
  
  let messages = await inbox.getLatestMessages();

  console.log("my inbox messages", JSON.stringify(messages,null,4));
  
  // Note: give  https://github.com/ismail-codinglab/gmail-inbox a star if it saved you time!
}

exeCuteMe();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
