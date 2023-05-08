import { Contact, Element, List, Button } from './ContactList.styled';

const ContactList = ({ filterElements, onDeleteContact }) => (
  <List>
    {filterElements.map(({ name, id, number }) => (
      <Element key={id}>
        <Contact>{name}:</Contact>
        <Contact> {number}</Contact>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Element>
    ))}
  </List>
);

export default ContactList;
