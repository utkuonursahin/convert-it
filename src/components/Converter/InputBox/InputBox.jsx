import React from 'react';
import {useCurrency} from "../../../context/CurrencyContext";
const InputBox = ({text,disabled}) => {
  const {setAmount, exchangedAmount}= useCurrency()
  return (
    <div className="flex justify-between items-center gap-4 text-xl">
      <span className={disabled ? 'text-green-500' : 'text-neutral-300'}>{text} :</span>
      <input className="h-10 text-center text-neutral-300 bg-gray-700 rounded-sm focus:outline-none"
             onChange={(e) => !disabled && setAmount(e.target.value)}
             type="number" disabled={disabled} value={disabled && exchangedAmount}/>
    </div>
  );
};

export default InputBox;
