import React from 'react'
import img from '../assets/image.png'
import { menuItems } from '../utils/MenuItems'
import { signout } from '../utils/Icons'

const NavBar = ({ active, setActive }) => {
  return (
    <div className="p-8 w-[374px] h-full bg-[rgba(252,246,249,0.78)] border border-white backdrop-blur-sm rounded-3xl flex flex-col justify-between gap-8">
      <div className="h-[100px] flex items-center gap-4">
        <img
          src={img}
          alt="profile-pic"
          className="w-20 h-20 rounded-full object-cover bg-slate-100 border border-slate-500 p-1 shadow-slate-800"
        />
        <div>
          <h2 className="text-violet-600">Krisna</h2>
          <p className="text-purple-950">Your Dashboard</p>
        </div>
      </div>
      <ul className="flex flex-1 flex-col">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`grid grid-cols-[40px_auto] items-center my-2.5 font-medium cursor-pointer transition-all duration-400 ease-in-out pl-4 relative ${
              active === item.id
                ? 'text-[rgba(34,34,96,1)]'
                : 'text-[rgba(34,34,96,0.6)]'
            }`}
            onClick={() => setActive(item.id)}
          >
            {active === item.id && (
              <span className="absolute left-0 top-0 w-[4px] h-full bg-[#222260] rounded-l-[10px]" />
            )}
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <li className="cursor-pointer">
          {signout} Sign Out
        </li>
      </div>
    </div>
  );
};


export default NavBar
