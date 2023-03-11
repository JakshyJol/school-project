
import './Dregion.css'


function Dregion() {

  return (
    <div className='region-select'>
      <select name="select">
        <option className='select' selected>Районы</option>
        <option value="value1">Аламудунский район</option>
        <option value="value2">Жайылский район</option>
        <option value="value3">Кеминский район</option>
        <option value="value4">Московский район</option>
        <option value="value5">Панфиловский район</option>
        <option value="value6">Сокулукский район</option>
        <option value="value7">Чуйский район</option>
        <option value="value8">Ысык-Атинский район</option>
        <option value="value9">Токмак</option>
      </select>
    </div>
    )
}

export default Dregion;

