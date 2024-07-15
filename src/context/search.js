// search.js (or context/search.js based on your folder structure)
import React, { useState, useContext, createContext } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        keyword: "",
        results: [],
    });

    return (
        <SearchContext.Provider value={[auth, setAuth]}>
            {children}
        </SearchContext.Provider>
    );
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
