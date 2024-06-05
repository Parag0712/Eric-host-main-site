import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import currency from "currency.js";
import { RootState } from "@/store/store";

const useCurrencyConverter = (price: number | string) => {
    const { currencyRate, currencySymbol } = useSelector((state: RootState) => state);
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
    console.log(currencyRate);
    
    useEffect(() => {
        if (currencyRate && price) {
            setConvertedAmount(currency(price).multiply(currencyRate).value);
        }
    }, [price, currencyRate]);

    return { convertedAmount, currencySymbol };
};

export default useCurrencyConverter;
