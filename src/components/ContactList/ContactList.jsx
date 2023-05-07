import { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.filterElements === '' ?
          this.props.contacts.map(({ name, id, number }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          }) : this.props.contacts.filter(({ name, id, number }) => {
            const filtered = this.props.filterElements === name;
            return (<li key={id}>
              {filtered}
            </li>);
          }) }
      </ul>
    );
  }
}

export default ContactList;
