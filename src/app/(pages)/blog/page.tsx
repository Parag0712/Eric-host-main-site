"use client"
import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import currency from "currency.js";

interface Country {
  label: string;
  value: string;
  currency?: string;
}

const CountryCurrencyConverter = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [currencyCode, setCurrencyCode] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [conversionRate, setConversionRate] = useState<number | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country: any) => ({
          label: country.name.common,
          value: country.cca2,
          currency: country.currencies ? Object.keys(country.currencies)[0] : null,
        }));
        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();

    const fetchUserCountry = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const userCountryCode = response.data.country_code;
        const userCountry = countries.find((country) => country.value === userCountryCode);
        if (userCountry) {
          setSelectedCountry(userCountry);
          setCurrencyCode(userCountry.currency! as string) ;
        }
      } catch (error) {
        console.error("Error fetching user's country:", error);
      }
    };

    fetchUserCountry();
  }, []);

  useEffect(() => {
    const fetchConversionRate = async () => {
      if (currencyCode) {
        try {
          const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${currencyCode}`);
          setConversionRate(response.data.rates["USD"]);
        } catch (error) {
          console.error("Error fetching conversion rate:", error);
        }
      }
    };

    fetchConversionRate();
  }, [currencyCode]);

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
    setCurrencyCode(selectedOption.currency as string);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  useEffect(() => {
    if (conversionRate && amount) {
      setConvertedAmount(currency(amount).multiply(conversionRate).value);
    }
  }, [amount, conversionRate]);

  return (
    <div>
      <h1>Country Currency Converter</h1>
      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countries}
        placeholder="Select a country"
      />
      {selectedCountry && (
        <div>
          <h2>Currency: {currencyCode}</h2>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
          {convertedAmount && (
            <div>
              <h3>Converted Amount: ${convertedAmount}</h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryCurrencyConverter;