import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter.jsx';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList'
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const onChangeHandler = (selectedYear) => {
    console.log('Valitud aasta: ',typeof selectedYear); 
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expenses => {
    return new Date(props.date).getFullYear() === filteredYear
  });
  

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeHandler} />
      <ExpensesList expenses={filteredExpenses}/> 
      </Card>
    </div>
  );
};

export default Expenses;
