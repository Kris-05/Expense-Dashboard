import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Dashboard from './Pages/Dashboard';
import Incomes from './Pages/Incomes';
import Expenses from './Pages/Expenses';
import { useGlobalContext } from './context/globalContext';

const App = () => {

  const [active, setActive] = useState(1);

  const { getIncome, getExpense } = useGlobalContext();
  // console.log(global);
 
  useEffect(() => {
      getIncome();
      getExpense();
    }, [])

  const displayPages = () => {
    switch (active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>
    }
  }

  return (
    <div className='h-screen w-full relative bg-gradient-to-br from-slate-400 via-[rgba(247,185,204,0.9)] to-slate-400'>
      <div className='p-8 h-full flex gap-8'>
        <NavBar active={active} setActive={setActive} />
        <main className='flex-1 bg-[rgba(252,246,249,0.78)] border border-white backdrop-blur-[4.5px] rounded-[32px] overflow-x-hidden'>
          {displayPages()}
        </main>
      </div>
    </div>
  )
}

export default App
