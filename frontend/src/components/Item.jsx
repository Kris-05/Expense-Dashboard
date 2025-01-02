import React from 'react'
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../utils/Icons'
import Button from './Button'
import { dateFormat } from '../utils/dateFormat'

const Item = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type
}) => {

  const categoryIcon = () =>{
    switch(category) {
        case 'salary':
            return money;
        case 'freelancing':
            return freelance
        case 'investments':
            return stocks;
        case 'stocks':
            return users;
        case 'bitcoin':
            return bitcoin;
        case 'bank':
            return card;
        case 'youtube':
            return yt;
        case 'other':
            return piggy;
        default:
            return ''
    }
  }

  const expenseCatIcon = () => {
    switch (category) {
        case 'education':
            return book;
        case 'groceries':
            return food;
        case 'health':
            return medical;
        case 'subscriptions':
            return tv;
        case 'takeaways':
            return takeaway;
        case 'clothing':
            return clothing;
        case 'travelling':
            return freelance;
        case 'other':
            return circle;
        default:
            return ''
    }
  }

  return (
    <div className='bg-[#FCF6F9] border-2 border-white shadow-md rounded-3xl p-4 mb-4 flex items-center gap-4 w-full text-primary'>
      <div className='w-20 h-20 rounded-[20px] bg-[#F5F5F5] flex items-center justify-center border-2 border-white'>
        <span className='text-4xl'>{type === 'expense' ? expenseCatIcon() : categoryIcon() }</span>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h5 className='text-xl pl-8 relative'>
        <span 
          className={`${indicatorColor} absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full`} 
        >
        </span>
          {title}
        </h5>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <p className='flex items-center gap-2 text-lg text-primary opacity-80'>
              {dollar} {amount}
            </p>
            <p className='flex items-center gap-2 text-sm text-primary opacity-80'>
              {calender} {dateFormat(date)}
            </p>
            <p className='flex items-center gap-2 text-lg text-primary opacity-80'>
              {comment} {description}
            </p>
          </div>
          <div className="btn-container">
            <Button
              icon={trash}
              bPad={'1rem'}
              bRad={'50%'}
              bg={'bg-primary'}
              color={'#fff'}
              iColor={'#fff'}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
