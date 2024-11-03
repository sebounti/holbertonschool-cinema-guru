import './general.css';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ title, setTitle }) => {
    const handleInput = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={title}
                onChange={handleInput}
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchBar;
