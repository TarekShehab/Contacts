import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
  {
    "id": "soka el 3abeta",
    "name": "Soka el 3abeta",
    "handle": "@Soka_!!!",
    "avatarURL": "https://placekitten.com/1000"
    // "avatarURL": "https://placebeard.it/250*147"
    // "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "Ali Alokka",
    "name": "Ali Alokka",
    "handle": "@A_Alokka",
    "avatarURL": "https://placebeard.it/250*147"
    // "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "Ashraf Kokha",
    "name": "Ashraf Kokha",
    "handle": "@Ash_Kokha",
    "avatarURL": "https://placebeard.it/200*118"
    // "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
