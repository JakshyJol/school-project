import React, { useState } from 'react';
import './DArea.css'
function DArea() {
  return (
    <div className='area-select'>
      <select name="select">
        <option className='select' selected>Область</option>
        <option className='area-option' value="value1">Чуйская область</option>
        <option className='area-option' value="value2">Таласская область</option>
        <option className='area-option' value="value3">Иссык-Кульская область</option>
        <option className='area-option' value="value4">Нарынская область</option>
        <option className='area-option' value="value5">Джалал-Абадская область</option>
        <option className='area-option' value="value6">Ошская область</option>
        <option className='area-option' value="value7">Баткенская область</option>
      </select>
    </div>
  )
}

export default DArea;
