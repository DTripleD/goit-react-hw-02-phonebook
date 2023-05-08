import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper } from './App.styles';
import { nanoid } from 'nanoid';

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

  addContact = ({ name, number }) => {
    const id = nanoid();

    if (
      this.state.contacts.some(
        value => value.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(name + 'is already in contacts.');
    } else {
      this.setState(prevState => {
        const list = [...prevState.contacts];

        list.push({
          id,
          name,
          number,
        });

        return { contacts: list };
      });
    }
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getFilteredContacts();

    return (
      <AppWrapper>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        <ContactList
          filterElements={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </AppWrapper>
    );
  }
}

export default App;
