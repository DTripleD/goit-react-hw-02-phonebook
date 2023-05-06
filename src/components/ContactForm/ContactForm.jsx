import { Component } from 'react';
import {FormWrapper} from './ContactForm.style';

class ContactForm extends Component {

  render() {
    return (
      <FormWrapper>
        
        <form onSubmit={this.props.addContact}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type='submit'>Add contact</button>
        </form>
      </FormWrapper>
    );
  }
}

export default ContactForm;
