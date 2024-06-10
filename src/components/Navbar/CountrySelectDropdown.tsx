import React, { useState } from 'react';
interface CountrySelectDropdownProps {
  flags: string[];
  names: string[];
  defaultCountry?: {
    label: string;
    value: string;
    currency?: string;
    currencySymbol?: string;
    flag?: string;
  };
  onSelect: (country: string) => void;
}

const CountrySelectDropdown: React.FC<CountrySelectDropdownProps> = ({ flags, names, defaultCountry, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCountryClick = (name: string) => {
    setSelectedCountry(name);
    onSelect(name);
    setIsOpen(false);
  };
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  const filteredNames = names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="relative font-sans  mx-auto w-full lg:max-w-[150px] min-w-[150px] ">
      <button
        type="button"
        className="py-1.5 px-0 md:px-5 md:py-2 flex items-center justify-center rounded w-full text-[#333] text-sm font-semibold border-2 border-blue-600 outline-none hover:bg-blue-50"
        onClick={toggleDropdown}
      >
        {selectedCountry ? (
          <div className="flex items-center">
            <img src={flags[names.indexOf(selectedCountry)]} className="w-6 mr-3" alt={`${selectedCountry} Flag`} />
            {truncateText(selectedCountry, 6)}
          </div>
        ) : (
          <div className="flex items-center">
            {
              defaultCountry?.flag !== "" && (
                <img src={flags[names.indexOf(defaultCountry?.label!)]} className="w-6 mr-3" alt={`${defaultCountry?.label} Flag`} />
              )
            }
            {truncateText(defaultCountry?.label!, 15)}
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 fill-[#333] relative top-[2px] inline ml-3"
          viewBox="0 0 24 24 "
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
            data-original="#000000"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">

          {filteredNames.map((name, index) => (
            <li
              key={index}
              className="py-2.5 px-4 hover:bg-blue-50 rounded text-black text-sm cursor-pointer"
              onClick={() => handleCountryClick(name)}
            >
              <div className="flex items-center">
                <img src={flags[names.indexOf(name)]} className="w-6 mr-3" alt={`${name} Flag`} />

                {truncateText(name, 15)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySelectDropdown;
