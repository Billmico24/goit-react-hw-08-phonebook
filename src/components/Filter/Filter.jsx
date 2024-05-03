import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';

import { SearchInput } from "./Filter.styled"


export const Filter = () => {
  const dispatch = useDispatch();

    return (
        <label htmlFor="">
        Find contacts by name
        <SearchInput
            type="text"
            onChange={e => dispatch(filterContacts(e.currentTarget.value))} />
        </label>
    )
}
