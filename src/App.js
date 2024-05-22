import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import List from './components/List';
import Form from './components/Form';
import Chart from './components/Chart';

function App() {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(null);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleAddBalance = (amount) => {
    setBalance(balance + parseFloat(amount));
  };

  const removeExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
  };

  return (
    <div className='text-gray-700'>
      <div className="text-3xl text-center font-semibold tracking-wider py-4">
        Expense Tracker
      </div>
      <Card balance={balance} expenses={expenses} />
      <Button setShowForm={setShowForm} />
      {showForm === 'expense' && (
        <Form
          type="expense"
          onSubmit={(value) => {
            handleAddExpense(value);
            setShowForm(null);
          }}
        />
      )}
      {showForm === 'balance' && (
        <Form
          type="balance"
          onSubmit={(value) => {
            handleAddBalance(value.amount);
            setShowForm(null);
          }}
        />
      )}
      <List expenses={expenses} removeExpense={removeExpense} />
      <Chart expenses={expenses} />
    </div>
  );
}

export default App;
