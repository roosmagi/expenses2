import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css' 
import { useState } from 'react'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title) 
    
    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    } 

    return (
        <li>
        <Card className='expense-item'> 
            <ExpenseDate date={props.data.date}/> 
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">{props.data.price}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
        </li>
    )
} 

export default ExpenseItem