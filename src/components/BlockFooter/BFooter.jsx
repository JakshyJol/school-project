
import mail from '../../assets/footer/mail.svg'
import insta from '../../assets/footer/insta.svg'
import whats from '../../assets/footer/whats.svg'
import facebook from '../../assets/footer/facebook.svg'

import './BFooter.css';


function Bfooter() {
    return (
        <div className='Bfooter'>
            <div className='footerLogo'>
                <h1>Eduqueue</h1>
            </div>
            <div className='footerNav'>
                <p>Школы</p>
                <p>Новости</p>
            </div>
            <div className='footerIcons'>

                <img src={mail} className='icons' alt="" />
                <img src={insta} className='icons' alt="" />
                <img src={whats} className='icons' alt="" />
                <img src={facebook} className='icons' alt="" />
            </div>
        </div>
    )
}
export default Bfooter;