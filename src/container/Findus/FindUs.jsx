import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import Button from '../../components/Button/Button';


const FindUs = () => (

  <div className='app__bg app__wrapper section__padding' id='contact'>

    <div className='app__wrapper_info'>
      <SubHeading title='Contato' />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Onde estamos?</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p className='p__cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}> 
          Horas de funcionamento
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <div style={{marginTop:'2rem'}}>
        <Button text='Nos viste!'/>
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>

  </div>

);

export default FindUs;
