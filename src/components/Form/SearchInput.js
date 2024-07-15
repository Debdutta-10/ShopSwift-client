// SearchInput.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/search"; // Correct import path based on your folder structure

const SearchInput = () => {
    const [auth, setAuth] = useSearch(); // Destructure auth and setAuth from useSearch
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform search logic here, e.g., navigate to a search results page
        navigate(`/search-results?keyword=${encodeURIComponent(auth.keyword)}`);
    };

    const handleChange = (e) => {
        setAuth({ ...auth, keyword: e.target.value });
    };

    return (
        <div>
            <form
                className="d-flex search-form"
                role="search"
                onSubmit={handleSubmit}
            >
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={auth.keyword}
                    onChange={handleChange}
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
