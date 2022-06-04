import react from "react";
import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('ELON MUSK');

    const getResults = async(url) =>{
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5b4d547aa4msh48ae0640ef911fbp131215jsnc663afe386f9'
              }
          });

        const data = await response.json();
        // console.log({type, data})
        // if (type.includes("/news")){
        //     setResults(data.entries);
        // }
        // else if(type.includes("/images")){
        //     setResults(data.image_results);
        // } else {
        //      setResults(data.results);
        //     }

        console.log(data);
        setResults(data);
        setIsLoading(false);
    };

    return(
        <ResultContext.Provider value={{  getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );

};


export const useResultContext = () => useContext(ResultContext);