import './App.css';
import Expenses from './assets/Expenses/Expenses';
import NewExpense from './assets/NewExpense/NewExpense';

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  } 
  
  return(
  <div className='App'>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses/>
  </div>
)
}    

export default App;