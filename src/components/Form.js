import React, { useState } from 'react';

const Form = ({ type, onSubmit }) => {
  const [value, setValue] = useState({ name: '', amount: '', date: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue({ name: '', amount: '', date: '', category: '' });
  };

  return (
    <form className='flex flex-col items-center my-4' onSubmit={handleSubmit}>
      {type === 'expense' && (
        <>
          <input
            type='text'
            placeholder='Expense Name'
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            className='mb-2 p-2 border rounded'
            required
          />
          <input
            type='number'
            placeholder='Amount'
            value={value.amount}
            onChange={(e) => setValue({ ...value, amount: e.target.value })}
            className='mb-2 p-2 border rounded'
            required
          />
          <input
            type='date'
            value={value.date}
            onChange={(e) => setValue({ ...value, date: e.target.value })}
            className='mb-2 p-2 border rounded'
            required
          />
          <select
            value={value.category}
            onChange={(e) => setValue({ ...value, category: e.target.value })}
            className='mb-2 p-2 border rounded'
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="bills">Bills</option>
            <option value="other">Other</option>
          </select>
        </>
      )}
      {type === 'balance' && (
        <input
          type='number'
          placeholder='Balance Amount'
          value={value.amount}
          onChange={(e) => setValue({ ...value, amount: e.target.value })}
          className='mb-2 p-2 border rounded'
          required
        />
      )}
      <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
        Submit
      </button>
    </form>
  );
};

export default Form;
