import { Contact, Element, List, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  filterElements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
