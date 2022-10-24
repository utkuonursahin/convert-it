import React from 'react';
import {useCurrency} from "../../../context/CurrencyContext";
const SelectBox = ({from, currencyList}) => {
  const {setFrom, setTo} = useCurrency();
  const handleChange = (e) => {
    const value = e.target.value;
    from ? setFrom(value) : setTo(value);
  };
  return (
    <select onChange={handleChange} name="currencies" id="currenciesFrom" className="px-4 py-2 rounded-sm focus:outline-none">
      {currencyList.map((currency,i) => <option key={i}>{currency}</option>)}
    </select>
  );
};

export default SelectBox;
