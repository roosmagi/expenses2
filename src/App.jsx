import './App.css';
import Expenses from './assets/Expenses/Expenses';
import NewExpense from './assets/NewExpense/NewExpense';

const App = () => {
  return(
  <div className='App'>
    <NewExpense></NewExpense>
    <Expenses/>
  </div>
)
}    

export default App;