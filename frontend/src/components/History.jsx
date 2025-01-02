import React from 'react'
import { useGlobalContext } from '../context/globalContext'

const History = () => {

  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <div className='flex gap-4 flex-col'>
      <h2 className='text-primary font-bold text-3xl'>
        Recent History
      </h2>
      {
        history.map((item) => {
          const { _id, title, amount, type } = item;
          return (
          <div key={_id} className='bg-[#FCF6F9] border-2 border-white shadow-lg p-4 rounded-2xl flex justify-between items-center'>
            <p style={{color: type === 'expense' ? 'red' : 'green'}}> 
              {title}
            </p>
            <p style={{color: type === 'expense' ? 'red' : 'green'}}> 
              {
                type === 'expense' ? `-${!amount ? 0 : amount}`: `+${!amount ? 0 : amount}`
              }
            </p> 
          </div>
        )})
      }
    </div>
  )
}

export default History
