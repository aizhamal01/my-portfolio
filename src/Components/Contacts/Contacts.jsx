import React from 'react';
import { Phone, Email } from './img/phone.png/email.png';

class Contacts extends React.Component {
    render() {
      return (
        <div className='Contacts'>
            <Phone className='icon' />
            <span>+ 996 550 088181</span>
            <Email className= 'icon' />
            <span>aizhamalkanybekova72@gmail.com</span>
        </div>
    )
} }

export default Contacts
