import React from 'react';
import CurrencySelect, {CurrencySelectFrom, CurrencySelectTo} from "@/components/CurrencySelect";
import ConversionInput, {
    ConversionInputAmount,
    ConversionInputConvertedAmount,
} from "@/components/ConversionInput";
import {ArrowLeftRight} from "lucide-react";
import {Label} from "@/components/ui/label";
import ConvertButton from "@/components/ConvertButton";
import Graph from "@/components/Graph";

const Converter = () => {
    return (
        <section id="converter"
                 className="ring-2 ring-primary/75 w-1/2 grid grid-cols-[4rem,1fr,4rem] gap-8 py-20 px-4 rounded-lg">
            <div className="col-start-2 flex items-center gap-8 ">
                <CurrencySelect>
                    <CurrencySelectFrom/>
                </CurrencySelect>
                <ArrowLeftRight color="#fff" size={48}/>
                <CurrencySelect>
                    <CurrencySelectTo/>
                </CurrencySelect>
            </div>
            <div className="col-start-2 w-full flex justify-between">
                <ConversionInput>
                    <ConversionInputAmount>
                        <Label>Amount:</Label>
                    </ConversionInputAmount>
                </ConversionInput>
                <ConversionInput>
                    <ConversionInputConvertedAmount>
                        <Label className="text-primary">Converted Amount:</Label>
                    </ConversionInputConvertedAmount>
                </ConversionInput>
            </div>
            <ConvertButton/>
            <Graph/>
        </section>
    );
};

export default Converter;