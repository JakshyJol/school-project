import people from '../../assets/blueLine/Queue-amico.svg'
import './BlueLine.css'
function BlueLine() {
    return (
        <div className="blueLine">
            <div className="blockFlex">
                <div className='blockLeft'>
                    <h1>Электронная очередь</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque illo repudiandae distinctio tenetur, quis suscipit officiis commodi amet adipisci ea architecto doloribus nemo vero inventore! Temporibus asperiores totam nisi.</p>
                    <button>Подать заявку</button>
                </div>
                <div className='BlockRight'>
                    <img src={people} />
                </div>
            </div>
        </div>
    )
}
export default BlueLine;