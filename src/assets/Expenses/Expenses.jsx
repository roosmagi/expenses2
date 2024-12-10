import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter.jsx';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const onChangeHandler = (selectedYear) => {
    console.log('Valitud aasta: ',typeof selectedYear); 
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expenses => 
    expenses.date.getFullYear().toString() === filteredYear
  );
  

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={onChangeHandler} />
        {
          filteredExpenses.length === 0 && <p>No expenses found</p>
        }
        {
        filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem 
          key={expense.id} data={expense} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
