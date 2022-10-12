import React, { Component } from "react";
import Container from "./Container";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import TotalNumberContacts from "./TotalNumberContacts";
import Filter from "./Filter";


export class App extends Component {
  state = {
    contacts: [],
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    filter: '',
  }

  addContact = data => {
    const { contacts } = this.state;
    const normalizedName = data.name.toLowerCase();

    if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState({ contacts: [data, ...contacts] });
  };

  changeFilter = e => this.setState({
    filter: e.currentTarget.value
  });

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState({
      contacts: [...this.state.contacts
        .filter(contact => contact.id !== contactId)]
    });
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.addContact}>
          </ContactForm>

          <h2>Contacts</h2>
          <TotalNumberContacts value={contacts.length} />
          {contacts.length > 0 &&
            <><Filter
              value={filter}
              onChange={this.changeFilter}
            />
              {(contacts.length > 0 && filteredContacts.length === 0) &&
                <h3>Sorry, no contacts were found for your search.</h3>}
              <ContactList
                contacts={filteredContacts}
                deleteContact={this.deleteContact}
              /></>}

        </Container>
      </>
    )
  }
};

