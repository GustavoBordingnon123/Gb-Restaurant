import React from 'react';
import './ButtonUp.css';
import { BsArrowUpShort } from 'react-icons/bs';

const ButtonUp = ({ onClick }) => {
  return (
    <button className='button__up' onClick={onClick}>
      <BsArrowUpShort className="button__up-icon" size={32} />
      Voltar para o topo
    </button>
  );
};

export default ButtonUp;
