import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import Button from '../Button/Button';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Se inscreva em nosso Newsletter</h1>
      <p className="p__opensans">E nunca perca nossas atualizações!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Digite seu email" />
      <Button text="Inscreva-se" />
    </div>
  </div>
);

export default Newsletter;