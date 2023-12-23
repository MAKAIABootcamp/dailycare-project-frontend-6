import { useState } from 'react';
import { Select, Space } from 'antd';
const { Option } = Select;

const DatePickerAntD = () => {
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
export default DatePickerAntD;