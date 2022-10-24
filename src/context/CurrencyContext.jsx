import {createContext, useContext, useState} from "react";

const CurrencyContext = createContext()

const CurrencyProvider = ({ children }) => {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [amount, setAmount] = useState(0)
  const [exchangedAmount, setExchangedAmount] = useState(0)
  const values = {from, setFrom, to, setTo, amount, setAmount, exchangedAmount, setExchangedAmount}
  return <CurrencyContext.Provider value={values}>{children}</CurrencyContext.Provider>
}
const useCurrency = () => useContext(CurrencyContext)
export { CurrencyProvider, useCurrency }

