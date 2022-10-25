import {createContext, useContext, useState} from "react";

const InputContext = createContext()

const InputProvider = ({ children }) => {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [amount, setAmount] = useState(0)
  const values = {from, setFrom, to, setTo, amount, setAmount}
  return <InputContext.Provider value={values}>{children}</InputContext.Provider>
}
const useInput = () => useContext(InputContext)
export { InputProvider, useInput }

