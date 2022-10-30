import TextInput from "./TextInput/TextInput";
import SelectBox from "./SelectBox/SelectBox";
const InputContainer = ({currencyList}) => {
  return (
    <form action="#" className=" flex flex-col items-center gap-8">
      <div className="w-full flex justify-between items-center">
        <SelectBox fromBox currencyList={currencyList}/>
        <span className="text-neutral-100">to</span>
        <SelectBox currencyList={currencyList}/>
      </div>
      <div className="flex flex-col align-center gap-6">
        <TextInput text="Amount"/>
        <TextInput text="Exchanged" disabled/>
      </div>
    </form>
  );
};

export default InputContainer;


