import React, { useContext } from 'react';
import InputHooks from '../Hooks/InputHooks';
import { ContactData } from './Context/ContactData';
import uuid from "uuid";


const ContactForm = () => {
    const {addContact} = useContext(ContactData)
    const [name,setName,resetName]= InputHooks('')
    const [email,setEmail,resetEmail]= InputHooks('')
    const [phone,setPhone,resetPhone]= InputHooks('')

    const addNewContact = (e) => {
      e.preventDefault();
      addContact({ name:name, email:email, phone:phone})
      resetName();
      resetEmail();
      resetPhone();

    }
	return (
		<form onSubmit={addNewContact}>
            <div className='form-group'>
                <h2>Add Contact</h2>
            </div>
            <hr/>
			
				<div className='form-group'>
					<input
						type="text"
						name="name"
						className="form-control"
						placeholder="Enter Name"
						value={name}
						onChange={setName}
					/>
				</div>

				<div className='form-group'>
					<input
						type="text"
						name="email"
						className="form-control"
						placeholder="Enter Email"
						value={email}
						onChange={setEmail}
					/>
				</div>

				<div className='form-group'>
					<input
						type="text"
						name="phone"
						className="form-control"
						placeholder="Enter phone"
						value={phone}
						onChange={setPhone}
					/>
				</div>

				<div className='form-group'>
					<input type="submit" value='Add Contacts' className="btn btn-info btn-block" />
				</div>
		
		</form>
	);
};

export default ContactForm;
