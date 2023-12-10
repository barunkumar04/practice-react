import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    
    const [data, setDate] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(response => JSON.parse(response)) // here response JSON structure but a string
        .then(responseInJSONFormat => setDate(responseInJSONFormat[currency]))
    }, [currency])

    return data;
}

export default useCurrencyInfo