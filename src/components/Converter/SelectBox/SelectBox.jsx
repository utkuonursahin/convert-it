import {useInput} from "../../../context/InputContext";
const SelectBox = ({fromBox, currencyList}) => {
  const {from,setFrom, to, setTo} = useInput();
  const handleChange = (e) => {
    const value = e.target.value;
    fromBox ? setFrom(value) : setTo(value);
  };
  return (
    <select onChange={handleChange} name="currencies" id="currenciesFrom" className="px-4 py-2 rounded-sm focus:outline-none" value={fromBox ? from : to}>
      {currencyList.map((currency,i) => <option key={i}>{currency}</option>)}
    </select>
  );
};

export default SelectBox;
