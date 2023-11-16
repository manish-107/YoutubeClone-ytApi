import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from '../utils/api';

// Creating a context to share state across components
export const Context = createContext();

// AppContext component to manage global state
export const AppContext = (props) => {
    // State variables
    const [loading, setLoading] = useState(false); // Loading state
    const [searchResults, setsearchResults] = useState([]); // Results of the search
    const [selectCategories, setselectCategories] = useState("new"); // Selected category
    const [mobileMenu, setMobileMenu] = useState(false); // Mobile menu state
    const [errorMsg, setErrorMsg] = useState({ // Error message state
        state: false,
        msg: "",
    });

    // useEffect to fetch data when the selected category changes
    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories]);

    // Function to fetch data based on the selected category
    const fetchSelectedCategoryData = async (query) => {
        setLoading(true); // Set loading to true while fetching data
        try {
            // Fetch data from the API based on the query
            const contents = await fetchDataFromApi(`search?part=snippet&q=${query}`);
            setsearchResults(contents.items); // Update searchResults with the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
            setErrorMsg({
                state: true,
                msg: error
            });
        } finally {
            setLoading(false); // Set loading back to false after fetching data (whether successful or not)
        }
    };

    // Providing the state and functions through the context
    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setselectCategories,
            selectCategories,
            mobileMenu,
            setMobileMenu,
            errorMsg,
            setErrorMsg
        }}>
            {props.children} {/* Render the children components */}
        </Context.Provider>
    );
}
