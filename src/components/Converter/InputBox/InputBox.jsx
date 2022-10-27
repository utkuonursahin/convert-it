import {useInput} from "../../../context/InputContext";
import {useOutput} from "../../../context/OutputContext";
const InputBox = ({text,disabled}) => {
  const {setAmount}= useInput()
  const {exchangedAmount} = useOutput();
  return (
    <div className="flex justify-between items-center gap-4 text-base sm:text-xl">
      <span className={disabled ? 'text-green-500' : 'text-neutral-300'}>{text} :</span>
      <input className="w-1/2 sm:w-min h-8 sm:h-10 text-center text-neutral-300 bg-gray-700 rounded-sm focus:outline-none"
             onChange={(e) => !disabled && setAmount(e.target.value)}
             type="number" disabled={disabled} value={disabled && exchangedAmount.toFixed(4)}/>
    </div>
  );
};

export default InputBox;
