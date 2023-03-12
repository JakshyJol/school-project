import './BFooter.css';
import { AiOutlineMail, AiOutlineWhatsApp , AiFillFacebook} from 'react-icons/Ai';
import { BsInstagram } from 'react-icons/Bs';


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
                <AiOutlineMail className='icons'/>
                <BsInstagram className='icons'/>
                <AiOutlineWhatsApp className='icons'/>
            </div>
        </div>
    )
}
export default Bfooter;