import React, { Component } from 'react';
import ListContacts from './ListContacts';
// import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom'

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
  // API is not working so still use hardcoded contacts
  // componentDidMount() {
  //   ContactsAPI.getAll()
  //     .then((contacts) => {
  //       this.setState(() => ({contacts}))
  //     })
  // }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

    // ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts 
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}   
          />)}
        />

        <Route path='/create' component={CreateContact} />

      </div>
    )
  }
}

export default App
