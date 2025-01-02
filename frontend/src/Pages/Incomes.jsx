import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/globalContext'
import IncomeForm from '../components/IncomeForm';
import Item from '../components/Item';

const Incomes = () => {

  const {addIncome, getIncome, income, deleteIncome, totalIncome} = useGlobalContext();

  useEffect(() => {
    getIncome();
  }, [])

  return (
    <div className='flex overflow-auto'>
      <div className='p-8 w-full'>
        <h1 className='text-primary text-3xl mb-5 font-bold'>Incomes</h1> 
        <h2 className='text-primary flex justify-center items-center bg-[#FCF6F9] border-2 border-white rounded-3xl p-4 my-4 text-3xl gap-2'>
          Total-Income:
          <span className='text-4xl font-bold text-green'>
            ${totalIncome()}
          </span>
        </h2>
        <div className='flex gap-8'>
          <div className="form-container">
            <IncomeForm/>
          </div>
          <div className='flex-1'>
            {
              income.map((item) => {
                const { _id, title, amount, date, category, description, type } = item;
                return <Item
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor={'bg-violet-500'}
                  deleteItem={deleteIncome}
                />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incomes
