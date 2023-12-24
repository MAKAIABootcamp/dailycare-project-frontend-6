import { useState } from 'react';
import { Select, Space } from 'antd';
const { Option } = Select;
import ballon from '../../assets/images/ballon.png'
import balance from '../../assets/images/balance.png'
import './styles.sass'

export const DatePickerAntD = () => {
  const [type, setType] = useState('time');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Tiempo</Option>
        <Option value="date">Día</Option>
        <Option value="week">Semana</Option>
        <Option value="month">Mes</Option>
        <Option value="year">Año</Option>
      </Select>
    </Space>
  );
};

export const DatePickerPeriod = () => {
    const [type, setType] = useState('AM');
    return (
        <Space>
        <Select value={type} onChange={setType}>
            <Option value="AM">AM</Option>
            <Option value="PM">PM</Option>
        </Select>
        </Space>
    );
};

export const CategoriesPicker = () => {
    const [type, setType] = useState('Selecciona una categoría');
    return (
        <Space style={{width: '70%'}}>
            <Select value={type} onChange={setType} style={{width: '100%'}}>
                <Option disabled value="">Selecciona una categoría</Option>
                <Option value="motivation">
                    <div className='select-content'>
                        <span className='select-content--color' style={{backgroundColor: '#FBE3BF'}}></span>
                        <p>Motivación</p>
                        <span className='select-content--icon'>
                            <img src={ballon} />
                        </span>
                    </div>
                </Option>
                <Option value="meditation">
                    <div className='select-content'>
                        <span className='select-content--color' style={{backgroundColor: '#CFE8FF'}}></span>
                        <p>Meditación y lectura</p>
                        <span className='select-content--icon'>
                            <img src={balance} />
                        </span>
                    </div>
                </Option>
            </Select>
        </Space>
    );
};