import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/globalContext'
import Form from '../components/IncomeForm';
import ExpenseForm from '../components/ExpenseForm';
import Item from '../components/Item';

const Expenses = () => {

  const {addExpense, getExpense, expense, deleteExpense, totalExpense} = useGlobalContext();

  useEffect(() => {
    getExpense();
  }, [])

  return (
    <div className='flex overflow-auto'>
      <div className='p-8 w-full'>
        <h1 className='text-primary text-3xl mb-5 font-bold'>Expenses</h1> 
        <h2 className='text-primary flex justify-center items-center bg-[#FCF6F9] border-2 border-white rounded-3xl p-4 my-4 text-3xl gap-2'>
          Total-Expense:
          <span className='text-4xl font-bold text-red-700'>
            ${totalExpense()}
          </span>
        </h2>
        <div className='flex gap-8'>
          <div className="form-container">
            <ExpenseForm/>
          </div>
          <div className='flex-1'>
            {
              expense.map((item) => {
                const { _id, title, amount, date, category, description,type } = item;
                return <Item
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  type={type}
                  date={date}
                  category={category}
                  indicatorColor={'bg-violet-500'}
                  deleteItem={deleteExpense}
                />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expenses
