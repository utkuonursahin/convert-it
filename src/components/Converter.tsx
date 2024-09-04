import React from 'react';
import CurrencySelect, {CurrencyComboBox} from "@/components/CurrencySelect";
import ConversionInput, {
    ConversionInputAmount,
    ConversionInputConvertedAmount,
} from "@/components/ConversionInput";
import {ArrowLeftRight} from "lucide-react";
import {Label} from "@/components/ui/label";
import ConvertButton from "@/components/ConvertButton";

const Converter = () => {
    return (
        <section id="converter"
                 className="col-start-2 flex flex-col gap-8 items-center">
            <div className="col-start-2 w-full flex items-center gap-8 ">
                <CurrencySelect>
                    <CurrencyComboBox from={true}/>
                </CurrencySelect>
                <ArrowLeftRight color="#fff" size={48}/>
                <CurrencySelect>
                    <CurrencyComboBox from={false}/>
                </CurrencySelect>
            </div>
            <div className="col-start-2 w-full flex justify-between gap-20">
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
        </section>
    );
};

export default Converter;