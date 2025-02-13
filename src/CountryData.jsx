    import React, { useEffect, useState } from 'react'
    import { useParams } from 'react-router-dom'
    import axios from 'axios'

    const CountryData = () => {
        const [country, setcountry] = useState(null)
        const {name} = useParams()

        const data = async () => {
            const fetch = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            const data = fetch.data[0]

            setcountry(data)
            console.log(fetch)
        }

        useEffect(() => {
        data()
        }, [name])
        
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="bg-white p-6 md:p-10 shadow-lg rounded-lg w-full max-w-md text-center">
            {country ? (
                <div>
                    {/* Country Name */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{country.name.common}</h1>
    
                    {/* Flag */}
                    <img
                        className="mb-4 w-48 mx-auto rounded-lg shadow-md"
                        src={country.flags.png}
                        alt={`${country.name.common} Flag`}
                    />
    
                    {/* Details */}
                    <p className="mb-2 text-gray-700"><b>Alternative Spellings:</b> {country.altSpellings.join(', ')}</p>
                    <p className="mb-2 text-gray-700"><b>Population:</b> {country.population.toLocaleString()}</p>
                    <p className="mb-2 text-gray-700"><b>Region:</b> {country.region}</p>
                    <p className="mb-2 text-gray-700"><b>Capital:</b> {country.capital ? country.capital.join(', ') : 'N/A'}</p>
                    <p className="mb-2 text-gray-700"><b>Borders:</b> {country.borders ? country.borders.join(', ') : 'None'}</p>
                    <p className="mb-4 text-gray-700"><b>Languages:</b> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
    
                    {/* Google Maps Link */}
                    <a
                        href={country.maps.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-semibold"
                    >
                        🌍 View on Google Maps
                    </a>
                </div>
            ) : (
                <div className="text-gray-600 text-lg font-medium">Loading...</div>
            )}
        </div>
    </div>
    
    )
    }

    export default CountryData
