import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 2) {
            return;
        }

        onNewCategory(inputValue.toLowerCase()); 
        setInputValue('');
    }

  return (
    <form onSubmit={handleSubmit}>
    <input 
        type='text' 
        className='input' 
        placeholder='Buscar Gif'
        value={inputValue}
        onChange={handleInputChange}
        
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}