import React, { useState } from 'react';
import './App.css';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const LOCAL_STORAGE_KEY = 'list';

  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });

  const removeContactHandler = (id) => {
    const newContactList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newContactList);
  };

  const deleteConactHandler = (id) => {
    removeContactHandler(id);
  };

  return (
    <div className='main'>
      <div className='addNew'>
        <h4 style={{ marginTop: '20px' }}>Contact List</h4>
        <Link to='/add'>
          <button type='submit' className='btn btn-primary right'>
            Add New
          </button>
        </Link>
      </div>

      {list.map((contact) => {
        return (
          <ContactCard contact={contact} clickHandler={deleteConactHandler} />
        );
      })}
    </div>
  );
};

export default ContactList;
