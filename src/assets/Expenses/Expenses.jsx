import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter.jsx';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = () => {
  const [filteredYear, setFilteredYear] = useState('2024');
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99,
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 99.99,
    }
  ];

  const onChangeHandler = (selectedYear) => {
    console.log('Valitud aasta: ',typeof selectedYear); 
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expenses => 
    expenses.date.getFullYear().toString() === filteredYear
  );
  

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeHandler} />
        {filteredExpenses.map((expense, index) => (
          <ExpenseItem key={index} data={expense} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
