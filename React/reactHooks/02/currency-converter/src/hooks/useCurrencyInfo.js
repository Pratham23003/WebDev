import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data;
}
export default useCurrencyInfo;






// const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

// const useCurrencyInfo = async() => {
//     const [data,setData] = useState({});

//     try {
//         const response = await fetch(url);

//         if(!response.ok){
//             throw new Error("Failed to get data.");
//         }

//         const data = await response.json();
//         console.log(data);

//         if(data.response === "False"){
//             console.error("Error fetching data.",error);
//         }
//         else{
//             setData(response[currency]);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
// useEffect((currency) => {
//     useCurrencyInfo(currency)
// }, [currency])

// export default useCurrencyInfo;