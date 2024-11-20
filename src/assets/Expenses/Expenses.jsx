import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {

    const expenses =[  
        {
          date: new Date(2024, 10, 12),
          title: 'New book',
          price: 30.99 
        },
        {
          date: new Date(2024, 10, 12),
          title: "New jeans",
          price: 99.99
        } 
      ]
        
        return (
          <Card className="expenses">
            <ExpenseItem data={expenses[0]}/>
            <ExpenseItem data={expenses[1]}/>
          </Card>
        )
} 

export default Expenses
