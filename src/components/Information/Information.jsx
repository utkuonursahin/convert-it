import {useOutput} from "../../context/OutputContext";
import {useInput} from "../../context/InputContext";
const Information = () => {
  const {from,to} = useInput()
  const {exchangeRate} = useOutput()
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4 text-neutral-100 text-base">
      {exchangeRate ? <span>Parity: 1 {from} = {exchangeRate.toFixed(4)} {to}</span> : ''}
      <span className="text-center ">Select currencies, then hit the button!</span>
    </div>
  );
};

export default Information;
