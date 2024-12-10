import { useState } from 'react';
import './App.css';
import Expenses from './assets/Expenses/Expenses';
import NewExpense from './assets/NewExpense/NewExpense';

const DYMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2023, 10, 12),
    title: 'New book',
    price: 30.99,
  },
  {
    id: 'id2',
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99,
  },
  {
    id: 'id3',
    date: new Date(2024, 0, 25),
    title: 'New bag',
    price: 139.99, 
  } 
]; 

const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES) 

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]  
    }) 
  } 
  
  return(
  <div className='App'>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses expenses={expenses}/>
  </div>
)
}    

export default App;