
import { useSelector, useDispatch } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from "redux/contacts/operations";


import { toast } from 'react-toastify';

import { FormContainer, FromInput, SubmitButton } from "./ContactForm.styled";

export function ContactForm() {

  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

 const onSubmitHandler = e => {
    e.preventDefault();
    // console.dir(e.target.elements.name.value);
    const sameName = contacts.find(
      contact => contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase()
    );
   
    if (sameName) {
      return toast.error(`${sameName.name} is already in contacts`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            theme: "colored"});
    } 
    dispatch(addContact({
      name: String(e.target.elements.name.value),
      number: e.target.elements.number.value
    }));
   e.target.reset();
  };


  return (
    <FormContainer onSubmit={onSubmitHandler}>
            <label>Name</label>
             <FromInput
                 
                  type="text"
                  placeholder="Type name"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
      />
      <label>Number</label>
             <FromInput
                  
                  
                  placeholder="Type number"
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              <SubmitButton type="submit">Add contact</SubmitButton>
            
    </FormContainer>
               
  )
  
};
