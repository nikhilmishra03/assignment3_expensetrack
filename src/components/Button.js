import React from 'react';
import img1 from '../utils/expenses.png';
import img2 from '../utils/wallet.png';

const Button = ({ setShowForm }) => {
  return (
    <div className='flex justify-center font-semibold'>
      <button
        className='bg-sky-200 rounded-xl w-72 py-3 mx-3 pl-5 gap-3 flex'
        onClick={() => setShowForm('expense')}
      >
        <img src={img1} alt='expense' className='w-10 m-1' />
        Add your Expense
      </button>
      <button
        className='bg-sky-200 rounded-xl w-72 mx-3 py-3 pl-5 gap-3 flex'
        onClick={() => setShowForm('balance')}
      >
        <img src={img2} alt='wallet' className='w-10' />
        Add your Balance
      </button>
    </div>
  );
};

export default Button;
