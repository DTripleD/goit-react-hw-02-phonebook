import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper } from './App.styles';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (e) => {

  };

  render() {
    return (
      <AppWrapper>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact}/>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </AppWrapper>
    );
  }
}

export default App;
