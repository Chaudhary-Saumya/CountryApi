import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountry(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter countries based on search input
  const filteredCountries = country.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a country..."
        className="mb-6 p-3 border border-gray-400 rounded-lg w-80 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Countries Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {filteredCountries.length > 0 ? (
          filteredCountries
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((item, key) => (
              <div
                key={key}
                className="bg-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-4 w-48 text-center border"
              >
                <img
                  src={item.flags.png}
                  alt={`${item.name.common} Flag`}
                  className="w-full h-28 object-cover rounded-md mb-3"
                />
                <h1 className="text-lg font-semibold">
                  <Link
                    to={`/${item.name.common}`}
                    className="text-blue-600 hover:underline"
                  >
                    {item.name.common}
                  </Link>
                </h1>
              </div>
            ))
        ) : (
          <p className="text-gray-500">No matching countries found.</p>
        )}
      </div>
    </div>
  );
};

export default Data;
