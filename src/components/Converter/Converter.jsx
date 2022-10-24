import React from 'react';
import InputBox from "./InputBox/InputBox";
import SelectBox from "./SelectBox/SelectBox";
import {useCurrency} from "../../context/CurrencyContext";
import axios from "axios";
const Converter = ({currencyList}) => {
  const {from, to, amount, setExchangedAmount} = useCurrency();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios({
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      url: 'http://localhost:3000/api',
      data: {from,to,amount}
    })
    setExchangedAmount(res.data.data.response.value)
  }
  return (
    <form action="#" onSubmit={handleSubmit} className="flex flex-col items-center gap-8">
      <div className="w-full flex justify-between items-center">
        <SelectBox from currencyList={currencyList}/>
        <span className="text-neutral-100">to</span>
        <SelectBox currencyList={currencyList}/>
      </div>
      <div className="flex flex-col align-center gap-6">
        <InputBox text="Amount"/>
        <InputBox text="Exchanged" disabled/>
      </div>
      <span className="text-center text-neutral-100 text-base">Select currencies, then hit the button!</span>
      <button type="submit" className="w-1/2 p-4 text-green-500 bg-gray-900 rounded text-lg">Convert</button>
    </form>
  );
};

export default Converter;


