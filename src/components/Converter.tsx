import React from 'react';
import CurrencySelect from "@/components/CurrencySelect";
import ConversionInput from "@/components/ConversionInput";

const Converter = () => {
    return (
        <section id="converter" className="ring-2 ring-primary/75 w-1/2 grid grid-cols-[4rem,1fr,4rem] gap-8 p-10 rounded-lg">
            <CurrencySelect/>
            <ConversionInput/>
        </section>
    );
};

export default Converter;