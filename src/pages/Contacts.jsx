import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectLoading } from 'redux/contacts/selectors';


// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '../components/Loading/Loading';


// import { useGetContactsQuery } from '../../redux/contactsSlice';

export default function Contacts() {

  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
  const contacts = useSelector(selectAllContacts);
  // console.log(contacts);
  const isLoading = useSelector(selectLoading);
    return (
        <div>
        <>
          
          <h1>Phonebook</h1>
          <ContactForm />
          
          <h2>Contacts</h2>
          <Filter /> 
          {isLoading && <Loading />}
          {contacts.length === 0 ? <p>empty</p> : <ContactList/>}
          
        </>

        {/* Settings tostify  */}
   {/* <ToastContainer/> */}
    </div>
    )
}