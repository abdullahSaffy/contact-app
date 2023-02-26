import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const AddContact = () => {
  const LOCAL_STORAGE_KEY = 'list';
  const [state, setState] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();

  const add = (e) => {
    if (state.name === '' || state.email === '') {
      alert('All the fields are required');
      return;
    }
    const item = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    const newItem = [...item, { id: uuid(), ...state }];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItem));
    navigate('/');
  };

  return (
    <div className='main'>
      <h4 style={{ paddingTop: '25px' }}>Add Contact</h4>
      <form>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter your name'
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your email address'
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>

        <button type='submit' className='btn btn-primary' onClick={() => add()}>
          Add
        </button>
      </form>
    </div>
  );
};
export default AddContact;
