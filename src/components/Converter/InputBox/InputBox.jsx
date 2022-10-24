import React from 'react';
const InputBox = ({text,disabled}) => {
  return (
    <div className="flex justify-between items-center gap-4 text-xl">
      <span className={disabled ? 'text-green-700' : 'text-neutral-300'}>{text} :</span>
      <input type="number" disabled={disabled} className="h-10 bg-gray-700 rounded-sm"/>
    </div>
  );
};

export default InputBox;
