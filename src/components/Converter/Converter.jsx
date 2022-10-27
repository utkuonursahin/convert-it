import InputBox from "./InputBox/InputBox";
import SelectBox from "./SelectBox/SelectBox";
import Button from "./Button/Button";
import Information from "./Information/Information";
const Converter = ({currencyList}) => {
  return (
    <form action="#" className=" flex flex-col items-center gap-8">
      <div className="w-full flex justify-between items-center">
        <SelectBox fromBox currencyList={currencyList}/>
        <span className="text-neutral-100">to</span>
        <SelectBox currencyList={currencyList}/>
      </div>
      <div className="flex flex-col align-center gap-6">
        <InputBox text="Amount"/>
        <InputBox text="Exchanged" disabled/>
      </div>
      <Information/>
      <Button/>
    </form>
  );
};

export default Converter;


