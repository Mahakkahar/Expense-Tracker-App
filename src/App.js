import React from 'react';
import {Header} from './components/Header'
import{Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import{AddTransaction} from './components/AddTransaction'
import{GlobalProvider} from './context/GlobalState'
import './App.css';
import ExpenseChart from './components/Chart'



function App() {

  

  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <ExpenseChart/>
     <TransactionList/>
     <AddTransaction/> 
    </div>
    {/* <Chart/> */}
    </GlobalProvider>
  );
}


export default App;
