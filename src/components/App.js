import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ContactList />} />
        <Route path='/add' element={<AddContact />} />
        <Route path='/contact/:id' element={<ContactDetail />} />
      </Routes>
    </>
  );
};

export default App;
