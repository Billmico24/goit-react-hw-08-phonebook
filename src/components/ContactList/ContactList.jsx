import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/contacts/selectors';

import { ContactsTable, TableHeaders, TableRows, TableData, DeleteButton } from "./ContactList.styled";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  // const onDeleteHandler = () => {
  //   dispatch(deleteContact(el.id))
  //  };
  // }

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContacts = findContacts();
  
  return (
      
    <ContactsTable >
      <thead>
        <TableRows>
          <TableHeaders>Name</TableHeaders>
          <TableHeaders>Phone number</TableHeaders>
          <TableHeaders></TableHeaders>
        </TableRows>
      </thead>
      
      <tbody>
        {filteredContacts.map(el => (
          <TableRows key={el.id}>
            <TableData>{el.name}</TableData>
            <TableData>{el.number}</TableData>
            <TableData><DeleteButton type="button" onClick={() => dispatch(deleteContact(el.id))}>delete</DeleteButton></TableData>
          </TableRows>
        ))}
      </tbody>
    </ContactsTable>
  )
};


