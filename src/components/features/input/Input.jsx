import React from 'react';
import { Input, Select, AutoComplete } from 'antd';
import './input.css';

const MyInput = ({ type, handleClick }) => {
  return (
    <>
      <div className='inputLabel'>
        <p>pay</p>
        <p>0 ETH</p>
      </div>
      <Input.Group compact>
        <AutoComplete
          type='number'
          style={{ width: '70%' }}
          placeholder='0.88888'
          inputValue='0.99999'
        />
        <Select
          type={type}
          onClick={handleClick}
          defaultValue='0 ETH'
          style={{ width: '30%' }}
        ></Select>
      </Input.Group>
    </>
  );
};

export default MyInput;
