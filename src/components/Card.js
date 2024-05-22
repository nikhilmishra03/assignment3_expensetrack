import React from 'react';
import { CiBank } from "react-icons/ci";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa";


const Card = ({ balance, expenses }) => {
  const totalSpent = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
  const remaining = balance - totalSpent;

  return (
    <div className='flex justify-center my-6'>
      <div className='bg-emerald-400 rounded-xl w-3/12 py-8 mx-3 flex flex-col items-center text-white shadow-lg'>
        <CiBank className='text-4xl mb-2' />
        <div className='text-xl font-bold'>Balance</div>
        <div className='text-2xl font-semibold mt-2'>₹ {balance.toFixed(2)}</div>
      </div>
      <div className='bg-red-400 rounded-xl w-3/12 py-8 mx-3 flex flex-col items-center text-white shadow-lg'>
        <FaMoneyCheck className='text-4xl mb-2' />
        <div className='text-xl font-bold'>Spent</div>
        <div className='text-2xl font-semibold mt-2'>₹ {totalSpent.toFixed(2)}</div>
      </div>
      <div className='bg-yellow-400 rounded-xl w-3/12 py-8 mx-3 flex flex-col items-center text-white shadow-lg'>
        <RiMoneyRupeeCircleLine className='text-4xl mb-2' />
        <div className='text-xl font-bold'>Remaining</div>
        <div className='text-2xl font-semibold mt-2'>₹ {remaining.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Card;
