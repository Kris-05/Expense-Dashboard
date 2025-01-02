import React from 'react'
import {Chart as ChartJs, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../context/globalContext'
import { dateFormat } from '../utils/dateFormat'


ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
)

const ChartComponent = () => {

  const {income, expense} = useGlobalContext();

  const data = {
    labels: income.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: 'Incomes',
        data: [
          ...income.map((ele) => {
            const { amount } = ele;
            return amount;
          })
        ],
        backgroundColor: 'green',
        tension: .2,
      },
      {
        label: 'Expenses',
        data: [
          ...expense.map((ele) => {
            const { amount } = ele;
            return amount;
          })
        ],
        backgroundColor: 'red',
        tension: .2,
      }
    ],
  }

  return (
    <div className='h-full bg-[#FCF6F9] border-2 border-white rounded-3xl p-4 shadow-lg'>
      <Line data={data}/>
    </div>
  )
}

export default ChartComponent
