import React, { useContext } from 'react';
import { ContactData } from './Context/ContactData';



const ContactDetails = ({user}) => {
    const {removeItem} = useContext(ContactData)
    return (
        <>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
               <button type='button' className='btn btn-danger' onClick={()=>removeItem(user.id)}>Delete</button>
               
            </td>
        </>
    );
};

export default ContactDetails;