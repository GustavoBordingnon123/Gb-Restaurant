import React from 'react';
import { FiGithub, FiMail , FiLinkedin } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Nos contate</h1>
        <p className="p__opensans">Parana - Curitiba - Centro</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.MyLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;A Melhor Maneira de se Encontrar é se Perder no Serviço aos Outros.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">

          <a href='https://github.com/GustavoBordingnon123/Gb-Restaurant' target='blank'>
            <FiGithub/>
          </a>

          <a href='https://portifolio-gb.vercel.app' target='blank'>
            <FiMail />
          </a>

          <a href='https://www.linkedin.com/in/gustavo-bordignon-326861203/' target='blank'>
            <FiLinkedin />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horas de serviço</h1>
        <p className="p__opensans">Segunda-Sexta:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sabado-Domingo:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Gustavo Bordignon. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;