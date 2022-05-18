// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import InputForm from './InputForm/InputForm';
// import contactDefault from './DataDefault/Data.json';
import ContactList from './components/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    // contacts: contactDefault,
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    // console.log(prevState);
    // console.log(this.state);
  }

  onAddContact = contact => {
    if (this.state.contacts.some(item => item.name === contact.name)) {
      alert(`${contact.name} is ready in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getAddedContacts = () => {
    const { filter, contacts } = this.state;
    const toLowerCaseFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(toLowerCaseFilter)
    );
  };

  render() {
    console.log('App render');
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          padding: '50px',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <InputForm onSubmit={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={this.getAddedContacts()}
          deleteCont={this.onDeleteContact}
          // contactsArr={this.getAddedContacts()}
          // deleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
