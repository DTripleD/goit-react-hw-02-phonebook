import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper } from './App.styles';
import { nanoid } from 'nanoid';

const LS_KEY = 'contacts_list';

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

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const id = nanoid();
    const isExist = this.state.contacts.some(
      value => value.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(name + 'is already in contacts.');
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { id, name, number }] };
    });
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
