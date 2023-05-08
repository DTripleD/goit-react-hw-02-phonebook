import { Component } from 'react';
import { FormWrapper, Form ,AddContact, Button} from './ContactForm.style';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormWrapper>
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.props.addContact(this.state);
          }}
        >
          <AddContact>
            Name
            <input
              value={this.state.name}
              onChange={this.onChangeInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </AddContact>

          <AddContact>
            Number
            <input
              value={this.state.number}
              onChange={this.onChangeInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </AddContact>
          <Button type="submit">Add contact</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default ContactForm;
