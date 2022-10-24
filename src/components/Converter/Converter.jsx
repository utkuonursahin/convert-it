import React from 'react';
import InputBox from "./InputBox/InputBox";
import SelectBox from "./SelectBox/SelectBox";

const Converter = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full flex justify-between items-center">
        <SelectBox/>
        <span className="text-neutral-100">to</span>
        <SelectBox/>
      </div>
      <div className="flex flex-col align-center gap-6">
        <InputBox text="Amount"/>
        <InputBox text="Exchanged" disabled/>
      </div>
      <span className="text-center text-neutral-100 text-base">Select currencies, then hit the button!</span>
      <button className="w-1/2 p-4 text-green-700 bg-gray-900 rounded text-lg">Convert</button>
    </div>
  );
};

export default Converter;
