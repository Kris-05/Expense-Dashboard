import React from 'react'
import ChartComponent from '../components/Chart'
import { dollar } from '../utils/Icons'
import { useGlobalContext } from '../context/globalContext'
import History from '../components/History'

const Dashboard = () => {

  const { income, expense, totalIncome, totalExpense, totalBalance} = useGlobalContext();

  return (
    <div>
      <div className='p-8 w-full'>
        <h1 className='text-primary font-bold text-3xl mb-4'>All Transactions</h1> 
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3 h-[300px]">
            <ChartComponent />
            <div className="grid gap-8 grid-cols-4 mt-8">
              <div className="flex flex-col justify-center items-center col-span-2 bg-[#FCF6F9] border-2 border-white shadow-lg p-4 rounded-2xl">
                <h2 className='text-primary font-semibold text-3xl'>Total Income:</h2>
                <p className='text-primary2 text-5xl font-bold'>
                  {dollar}{totalIncome()}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center col-span-2 bg-[#FCF6F9] border-2 border-white shadow-lg p-4 rounded-2xl">
                <h2 className='text-primary font-semibold text-3xl'>Total Expense:</h2>
                <p className='text-primary2 text-5xl font-bold'>
                  {dollar}{totalExpense()}
                </p>
              </div>
              <div style={{gridColumn: "2 / 4"}} className="flex flex-col justify-center items-center bg-[#FCF6F9] border-2 border-white shadow-lg p-4 rounded-2xl">
                <h2 className='text-primary font-semibold text-3xl'>Total balance:</h2>
                <p className='font-bold text-green opacity-60 text-6xl'>
                  {dollar}{totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div style={{gridColumn: "4/-1"}} className="">
            <History/>
            <h2 className='text-primary font-bold text-xl my-4 flex justify-between items-center'>Min <span className='text-3xl'>Income</span> Max</h2>
            <div class="bg-[#FCF6F9] border-2 border-white shadow-lg p-4 rounded-2xl flex justify-between items-center">
              <p className='font-semibold text-2xl text-primary2'>
                ${Math.min(...income.map((item) => item.amount))}
              </p>
              <p className='font-semibold text-2xl text-primary2'>
                ${Math.max(...income.map((item) => item.amount))}
              </p>
            </div>
            <h2 className='text-primary font-bold text-xl my-4 flex justify-between items-center'>Min <span className='text-3xl'>Expense</span> Max</h2>
            <div class="bg-[#FCF6F9] border-2 border-white shadow-lg p-4 rounded-2xl flex justify-between items-center">
              <p className='font-semibold text-2xl text-primary2'>
                ${Math.min(...expense.map((item) => item.amount))}
              </p>
              <p className='font-semibold text-2xl text-primary2'>
                ${Math.max(...expense.map((item) => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
