import React, { createContext, useState } from 'react';

export const ContactData = createContext()
const ContactDataProider= ({children}) => {

    const [contacts,setContacts] = useState([
        {id:1,name:'Hamid',email:'saifx$2gmail.com',phone: '01677022404'},
        {id:2,name:'Hasan',email:'Hasan04gmail.com',phone: '01687022404'},
        {id:3,name:'Sakib',email:'Sakib07gmail.com',phone: '01689022404'}
    ])

    const addContact = (contact) => {
      setContacts([...contacts,contact])
    }

    const removeItem = (i) => {
      const filtered = contacts.filter( contact => contact.id !== i)
      setContacts(filtered)
    }
    return (
        <div>
            <ContactData.Provider value={{users:contacts,addContact,removeItem}}>
                {children}
            </ContactData.Provider>
        </div>
    );
};

export default ContactDataProider;