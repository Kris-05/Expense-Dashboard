import { createContext, useContext, useState } from "react";
import axios from "axios";

const BASE_URL = `http://localhost:5000/api/v1/`

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);

  // income
  const addIncome = async (income) => {
    try {
      const res = await axios.post(`${BASE_URL}add-income`, income);
      getIncome();
      console.log('Response:', res.data);      
    } catch (err) {
      console.error('Error response:', err.response.data);
      setError(err.response.data.message);
    }
  };

  const getIncome = async () => {
    try {
      const res = await axios.get(`${BASE_URL}get-income`);
      setIncome(res.data);
      console.log('Response:', res.data);
    } catch (err) {
      console.error('Error response:', err.response.data);
      setError(err.response.data.message);
    }
  }

  const deleteIncome = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
      getIncome();
      console.log('Response:', res.data);
    } catch (err) {
      if (err.response) {
        console.error('Error response:', err.response.data);
        setError(err.response.data.message);
      } else {
        console.error('Unexpected error:', err);
        setError('Something went wrong. Please try again.');
      }
    }
  }

  const totalIncome = () => {
    let total = 0;
    income.forEach(element => {
      total += element.amount;
    });
    return total;
  }

  // expense
  const addExpense = async (expense) => {
    try {
      const res = await axios.post(`${BASE_URL}add-expense`, expense);
      getExpense();
      console.log('Response:', res.data);      
    } catch (err) {
      console.error('Error response:', err.response.data);
      setError(err.response.data.message);
    }
  };

  const getExpense = async () => {
    try {
      const res = await axios.get(`${BASE_URL}get-expense`);
      setExpense(res.data);
      console.log('Response:', res.data);
    } catch (err) {
      console.error('Error response:', err.response.data);
      setError(err.response.data.message);
    }
  }

  const deleteExpense = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
      getExpense();
      console.log('Response:', res.data);
    } catch (err) {
      if (err.response) {
        console.error('Error response:', err.response.data);
        setError(err.response.data.message);
      } else {
        console.error('Unexpected error:', err);
        setError('Something went wrong. Please try again.');
      }
    }
  }

  const totalExpense = () => {
    let total = 0;
    expense.forEach(element => {
      total += element.amount;
    });
    return total;
  }

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  }
  
  const transactionHistory = () => {
    const history = [...income, ...expense];
    history.sort((a,b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0, 3);
  }
 
  return (
    <GlobalContext.Provider value={{
      addIncome, 
      getIncome,
      income,
      deleteIncome,
      totalIncome,
      addExpense,
      getExpense,
      expense,
      deleteExpense,
      totalExpense,
      totalBalance,
      transactionHistory,
      error,
      setError,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}