import {createContext, useContext, useState} from "react";

const LoadingContext = createContext()

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const values = {loading, setLoading}
  return <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
}
const useLoading = () => useContext(LoadingContext)
export { LoadingProvider, useLoading }