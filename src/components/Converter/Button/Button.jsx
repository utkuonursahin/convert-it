import axios from "axios";
import {useInput} from "../../../context/InputContext";
import {useOutput} from "../../../context/OutputContext";

const Button = () => {
  const {from, to, amount} = useInput();
  const {setExchangedAmount, setExchangeRate} = useOutput();
  const handleClick = async (e) => {
    e.preventDefault()
    const {data} = await axios({
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      url: 'http://localhost:3000/api',
      data: {from,to,amount}
    })
    setExchangedAmount(data.data.response.value)
    setExchangeRate(data.data.response.value / data.data.response.amount)
  }
  return (
    <button type="submit" onClick={handleClick} className="w-1/2 p-4 text-green-500 bg-gray-900 rounded text-lg">Convert</button>
  );
};

export default Button;
