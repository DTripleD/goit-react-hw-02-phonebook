import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { AppWrapper } from './App.styles';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  addContact = ({ name, number }) => {
    const id = nanoid();
    this.setState(prevState => {
      const list = [...prevState.contacts];
      list.push({
        id,
        name,
        number,
      });
      return { contacts: list };
    });
  };

  filter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <AppWrapper>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.filter} />
        <ContactList contacts={this.state.contacts} filterElements={this.state.filter}/>
      </AppWrapper>
    );
  }
}

export default App;
