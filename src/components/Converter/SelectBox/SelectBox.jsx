import React from 'react';
import currencyList from "../../../currencies.json";

const SelectBox = () => {
  return (
    <select name="currencies" id="currenciesFrom" className="px-4 py-2 rounded-sm">
      {currencyList.map((currency,i) => <option key={i}>{currency}</option>)}
    </select>
  );
};

export default SelectBox;
