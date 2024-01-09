import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import Button from '../../components/Button/Button';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Busque a Nova Experiência de Sabor" />
      <h1 className="app__header-h1">Desvende o Segredo do Jantar Sofisticado</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
      Desvendar o segredo do jantar sofisticado é como desbravar um universo de sabores e experiências culinárias únicas. 
      </p>
      <Button text="Explore o menu" />
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;