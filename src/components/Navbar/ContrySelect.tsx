"use client";
import { updateCurrencyRate } from "@/store/CurrencySlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CountrySelectDropdown from "./CountrySelectDropdown";
import countryData from "./countries.json";

interface Country {
  label: string;
  value: string;
  currency?: string;
  currencySymbol?: string;
  flag?: string;
}

const CountrySelect = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>({
    label: "India",
    value: "IN",
    currency: "INR",
    currencySymbol: "₹",
    flag: "/images/india-flag.svg",
  });
  const [currencyCode, setCurrencyCode] = useState<string>("INR");
  const [currencySymbol, setCurrencySymbol] = useState<string>("₹");


  useEffect(() => {
    if (currencyCode) {
      const rate = currencyCode === "USD" ? 0.01197 : 1; // Static conversion rate: 1 INR = 0.01197 USD
      dispatch(updateCurrencyRate({ currencyRate: rate, currencyCode, currencySymbol }));
    }
  }, [currencyCode, dispatch, currencySymbol]);

  return (
    <>
      <CountrySelectDropdown
        flags={countryData.map((country) => country.flag || '')}
        names={countryData.map((country) => country.label)}
        defaultCountry={selectedCountry!}
        onSelect={(selectedCountryName) => {
          const country = countryData.find((country) => country.label === selectedCountryName);
          if (country) {
            setSelectedCountry(country);
            setCurrencyCode(country.currency || '');
            setCurrencySymbol(country.currencySymbol || '');
          }
        }}
      />
    </>
  );
};

export default CountrySelect;
