

import personal from '../../assets/personalPage/personalFoto.svg'
import Bfooter from '../../components/BlockFooter/BFooter';
import Navbar from '../../components/nav-bar/Navbar';
import Docs from '../../components/personal/personalDocs';
import PersonalDost from '../../components/personal/personaldost';
import PersonalSena from '../../components/personal/personalSena';
import './PersonalPage.css'
function PersonalPage() {
    return (
        <>
        <Navbar/>
            <div className='personalPage'>
                <div className='personalFoto'>
                    <div className="pageFoto">
                        <img src={personal} />
                    </div>
                    <div className='personalInfo'>
                        <h4>Койчуманов Актан Сапарович</h4>
                        <p>Дата рождения: 30.06.2010</p>
                        <p>Адрес: г.Бишкек ул.Фрунзе, 54</p>
                        <p>Контакты: 0705 98 67 54</p>
                        <p>Эл.почта: aktan.15@gmail.com</p>
                    </div>
                </div>
                <div className='cardInfo-wrapper'>
                    <p className='cardInfoP'>Подробная информация</p>
                    <div className='cards'>
                        <div className='cards-left'>
                            <span>Родители</span>
                            <div className='mamaInfo'>
                                <p>Отец: Гапаров Мурат</p>
                                <p>Мать: Токтосунова Чинара</p>
                                <p>Количество детей в семье: 5</p>
                                <p>Кантакты родителей: 0555 77-90-54 ...</p>
                            </div>
                        </div>
                        <div className='cards-right'>
                            <div className='mamaInfo-right'>
                                <span>История обучения</span>
                                <div className='mamaInfo'>
                                    <p>С 2020 - настоящее время обучается в СШ №5 </p>
                                    <p>С 2017-2020  - Гимназия им. Айтиева</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PersonalDost />
                <PersonalSena />
                <Docs/>
                <Bfooter/>
            </div>
        </>
    )
}
export default PersonalPage;
