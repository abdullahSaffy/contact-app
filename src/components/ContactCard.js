import React from 'react';
import { Link } from 'react-router-dom';
const ContactCard = (props) => {
  const { id, email, name } = props.contact;
  return (
    <div style={{ margin: '7px 0px' }}>
      <ol className='list-group list-group-numbered'>
        <li className='list-group-item d-flex justify-content-between align-items-start'>
          <Link to={`/contact/${id}`} state={{ content: props.contact }}>
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>{email}</div>
              {name}
            </div>
          </Link>
          <i
            className='bi bi-trash'
            onClick={() => props.clickHandler(id)}
            style={{ color: 'red' }}
          ></i>
        </li>
      </ol>
    </div>
  );
};

export default ContactCard;
