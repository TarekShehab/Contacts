import React, { Component } from 'react';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListContacts extends Component {
    static propTypes = {
        contacts: propTypes.array.isRequired,
        onDeleteContact: propTypes.func.isRequired, 
    }
   
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery(' ')
    }

    render() {

        const { query } = this.state
        const { contacts, onDeleteContact } = this.props

        const ShowingContacts = (query === '') ? (contacts) : (contacts.filter(c => (c.name.toLowerCase().includes(query.toLocaleLowerCase())))) 

        return (
            <div className='list-contacts'>
                
                {/* Search bar at top */}
                <div className='list-contacts-top'>
                    
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />

                    {/* Create contact button */}
                    <Link 
                        to='/create'
                        className='add-contact'
                    >
                        Add contact
                    </Link>

                </div>

                         

                {
                    (ShowingContacts.length !== contacts.length) && 
                    (
                        <div className='showing-contacts'>
                            <span> Now Showing {ShowingContacts.length} of {contacts.length}</span>
                            <button onClick={this.clearQuery}>Show all again</button>
                        </div>
                    )
                }

                {/* List of the contacts */}
                <ol className='contact-list'>
                    { 
                        ShowingContacts.map(contact => (
                            <li key={contact.id} className='contact-list-item'>
                                <div 
                                    className='contact-avatar'
                                    style={{
                                        // backgroundImage: `url('./icons/arrow-back.svg')`
                                        backgroundImage: `url(${contact.avatarURL})`
                                    }}
                                ></div>
                                <div className='contact-details'>
                                    <p>{contact.name}</p>
                                    <p>{contact.handle}</p>
                                </div>
                                <button className='contact-remove' onClick={() => onDeleteContact(contact)}>Remove</button>
                            </li> 
                        ))
                    }
                </ol>
            </div>
        )

    }

}


export default ListContacts;