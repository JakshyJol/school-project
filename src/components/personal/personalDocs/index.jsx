
import './Docs.css'
function Docs() {
    return (<div className='Docs'>
        <p className='DocsDocs'>Документы</p>
        <div className='Docs-flex'>
            <div className='flex-box'>
                <p>Паспорт</p>
                <button>посмотреть</button>
            </div>
            <div className='flex-box'>
                <p>Cвитедельство о рождении </p>
                <button>посмотреть</button>
            </div>
            <div className='flex-box'>
                <p>Мед справка 082</p>
                <button>посмотреть</button>
            </div>
            <div className='flex-box'>
                <p>Фото 3/4</p>
                <button>посмотреть</button>
            </div>
            <div className='flex-box'>
                <p>Справка с места жительства</p>
                <button>посмотреть</button>
            </div>
        </div>
    </div>)
}
export default Docs;