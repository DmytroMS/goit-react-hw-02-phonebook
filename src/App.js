import react, { Component } from 'react';
import InputForm from './Components/ContactForm';
import shortid from 'shortid';
import {ContactList} from './Components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitAddContact = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      return alert(`${data.name} is alredy in contacts`);
    } else {
      data.id = shortid.generate();
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  getvisibleContacts = () => {
    const { contacts } = this.state;
    // const normalizedFilter = filter.toLowerCase();
    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter)
    // );
    return contacts
    console.log('contacts', contacts);
}

  render() {
    const visibleContacts = this.getvisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <InputForm addContactOnSubmit={this.onSubmitAddContact} />
        <h2>Contacts</h2>
        <ContactList
          // onDeleteContact={this.deleteContact}
          contacts={visibleContacts}
        />
      </div>
    );
  }
}

export default App;
