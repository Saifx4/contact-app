import React from 'react';
import NavBar from './components/NavBar';
import ContactDataProider from './components/Context/ContactData';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
   <NavBar/>
   <div className="container mt-5">
   <ContactDataProider>
     <ContactForm/>
     <Contacts/>
   </ContactDataProider>
   </div>
    </>
  );
}

export default App;
