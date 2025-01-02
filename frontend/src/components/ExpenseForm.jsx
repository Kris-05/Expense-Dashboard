import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../context/globalContext';
import { plus } from '../utils/Icons';
import Button from './Button';

const ExpenseForm = () => {

  const {addExpense, getExpense, error, setError} = useGlobalContext();

  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    desccription: '',
  })

  const { title, amount, date, category, description } = inputState;

  const handleInput = name => e => {
    setInputState({...inputState, [name]: e.target.value})
    setError('');
  }

  const handleSubmit = e => {
    e.preventDefault();

    const incomeData = {
      ...inputState,
      amount: Number(inputState.amount), // Convert amount to number
      date: inputState.date?.toString(), // Format date if necessary
    };

    addExpense(incomeData);
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
      {error && <p className='text-red-500 animate-shake'>{error}</p>}
      <input 
          className='w-full font-inherit outline-none px-4 py-2 rounded-md border-2 border-white bg-transparent resize-none shadow-md text-[rgba(34,34,96,0.9)] placeholder:text-[rgba(34,34,96,0.4)]'
          type="text" 
          value={title}
          name={'title'} 
          placeholder="Expense Title"
          onChange={handleInput('title')}
      />
      <input
          className='w-full font-inherit outline-none px-4 py-2 rounded-md border-2 border-white bg-transparent resize-none shadow-md text-[rgba(34,34,96,0.9)] placeholder:text-[rgba(34,34,96,0.4)]' 
          value={amount}  
          type="text" 
          name={'amount'} 
          placeholder={'Expense Amount'}
          onChange={handleInput('amount')} 
      />
      <DatePicker 
          className='w-full font-inherit outline-none px-4 py-2 rounded-md border-2 border-white bg-transparent shadow-md text-[rgba(34,34,96,0.9)] placeholder:text-[rgba(34,34,96,0.4)]'
          id='date'
          placeholderText='Enter A Date'
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
              setInputState({...inputState, date: date})
          }}
      />
      <div className="flex justify-end">
          <select
            className='focus:text-[rgba(34,34,96,1)] w-full font-inherit outline-none px-4 py-2 rounded-md border-2 border-white bg-transparent resize-none shadow-md text-[rgba(34,34,96,0.9)] placeholder:text-[rgba(34,34,96,0.4)]'
            required value={category} name="category" id="category" 
            onChange={handleInput('category')}
          >
              <option value="" disabled >Select Option</option>
              <option value="education">Education</option>
              <option value="groceries">Groceries</option>
              <option value="health">Health</option>
              <option value="subscriptions">Subscriptions</option>
              <option value="takeaways">Takeaways</option>
              <option value="clothing">Clothing</option>  
              <option value="travelling">Travelling</option>  
              <option value="other">Other</option> 
          </select>
      </div>
      <div>
          <textarea 
            className='w-full font-inherit outline-none px-4 py-2 rounded-md border-2 border-white bg-transparent resize-none shadow-md text-[rgba(34,34,96,0.9)] placeholder:text-[rgba(34,34,96,0.4)]'
            name="description"
            value={description} placeholder='Add A Reference'
            id="description" 
            cols="30" rows="4" 
            onChange={handleInput('description')}
          ></textarea>
      </div>
      <div>
          {/* <button className="px-4 py-2 rounded-md border-2 border-white shadow-md hover:bg-emerald-500 hover:border-cyan-700 focus:outline-none">Add income</button> */}
          <Button
            name={`Add Expense`}
            icon={plus}
            bPad={`.8rem 1.6rem`}
            bRad={`32px`}
            bg={`bg-pink-400 hover:bg-green hover:border-cyan-700`}
            color={`#fff`}
          />
      </div>
    </form>
  )
}

export default ExpenseForm
