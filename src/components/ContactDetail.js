import React, { useState } from 'react';
import { useLocation } from 'react-router';

const ContactDetail = (props) => {
  let { state } = useLocation();
  const { name, email } = state.content;
  console.log('stateee', state);
  return (
    <div className='card' style={{ width: '18rem', margin: '60px' }}>
      {/* <img src='...' className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{email}</p>
        <a href='/' className='btn btn-primary'>
          Back to Contact List
        </a>
      </div>
    </div>
  );
};

export default ContactDetail;
