import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaIndianRupeeSign } from "react-icons/fa6";


const List = ({ expenses, removeExpense }) => {
  return (
    <div className='flex flex-col items-center mt-5'>
      <h2 className='text-2xl font-bold mb-6'>Your Expense List</h2>
      {expenses.length === 0 ? (
        <p className='text-gray-500'>No expenses added yet.</p>
      ) : (
        <ul className='w-3/4'>
          {expenses.map((expense, index) => (
            <li key={index} className='bg-white shadow-md rounded-lg p-4 my-2 flex justify-between items-center'>
              <div className='flex items-center'>
                <FaIndianRupeeSign className='text-xl text-gray-500 mr-2' />
                <span className='text-lg font-medium'>{expense.name}</span>
              </div>
              <div className='flex items-center'>
                <span className='text-lg font-semibold text-gray-700 mr-4'>₹{expense.amount}</span>
                <span className='text-md text-gray-500 mr-4'>{expense.date}</span>
                <span className='text-md text-gray-500 mr-4'>{expense.category}</span>
                <button onClick={() => removeExpense(index)} className='text-red-500 hover:text-red-700'>
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
