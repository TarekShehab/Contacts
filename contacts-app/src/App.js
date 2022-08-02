import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state={
    contacts: [
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
     ]
  }

  removeContact = (contact) => {
    
    // this.setState({
    //   key: 'tyler'
    // })

    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
  }

  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}   
        />
      </div>
    );
  }
}

export default App;
