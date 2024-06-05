"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import { updateCurrencyRate } from "@/store/CurrencySlice";
import { useDispatch } from "react-redux";
import CountrySelectDropdown from "./CountrySelectDropdown";

interface Country {
  label: string;
  value: string;
  currency?: string;
  currencySymbol?: string;
  flag?: string;
}

const CountrySelect = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>({
    label:"India",
    flag:"",
    currency:"1",
    currencySymbol:"₹",
    value:""
  });
  const [currencyCode, setCurrencyCode] = useState<string>("");
  const [currencySymbol, setCurrencySymbol] = useState<string>("");

  const handleCountryChange = (selectedOption: Country | null) => {
    setSelectedCountry(selectedOption);
    setCurrencyCode(selectedOption?.currency || "");
    setCurrencySymbol(selectedOption?.currencySymbol || "");
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log(response);
        
        const countryData = response.data.map((country: any) => {
          const currencyCode = country.currencies ? Object.keys(country.currencies)[0] : null;
          const currencySymbol = currencyCode ? country.currencies[currencyCode].symbol : null;
          const flagUrl = country.flags.svg
          return {
            label: country.name.common,
            value: country.cca2,
            currency: currencyCode,
            currencySymbol: currencySymbol,
            flag: flagUrl
          };
        });
        setCountries(countryData);

        // Fetch the user's country after countries data is set
        const fetchUserCountry = async () => {
          try {
            const response = await axios.get("https://ipapi.co/json/");
            const userCountryCode = response.data.country_code;
            const userCountry = countryData.find((country: Country) => country.value === userCountryCode);
            if (userCountry) {
              setSelectedCountry(userCountry);
              setCurrencyCode(userCountry.currency || "");
              setCurrencySymbol(userCountry.currencySymbol || "");
            }
          } catch (error) {
            console.error("Error fetching user's country:", error);
          }
        };

        fetchUserCountry();
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchConversionRate = async () => {
      if (currencyCode) {
        try {
          const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/INR`);
          const rate = response.data.rates[currencyCode];
          dispatch(updateCurrencyRate({ currencyRate: rate, currencyCode, currencySymbol }));
        } catch (error) {
          console.error("Error fetching conversion rate:", error);
        }
      }
    };

    fetchConversionRate();
  }, [currencyCode, dispatch]);


  return (
    <>
      <CountrySelectDropdown
        flags={countries.map((country) => country.flag || '')}
        names={countries.map((country) => country.label)}
        defaultCountry={selectedCountry!}
        onSelect={(selectedCountryName) => {
          const country = countries.find((country) => country.label === selectedCountryName);
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
