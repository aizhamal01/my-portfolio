import React from 'react'
import ContactItem from '../../Components/ContactItem';
import phone from '../../slider/img/phone.png';
import email from '../../slider/img/email.png';
import telegram from '../../slider/img/telegram.png';

function Contacts() {
    return (
        <div>
        <div className='contact-sect'>
            <ContactItem icon={phone} text1={'+996550088181'} text2={'+996550088181'} title={'phone'}/>
            <ContactItem icon={email} text1={'aizhamalkanybekova72@gmail.com'} text2={'aizhamalkanybekova72@gmail.com'} title={'email'} />
            <ContactItem icon={telegram} text1={'aijamalkanybekova'} text2={'aijamalkanybekova'} title={'telegram'} />
        </div>
        </div>

     
    )
}

export default Contacts




