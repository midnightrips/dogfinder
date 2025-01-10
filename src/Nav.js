import { Link } from "react-router-dom";
import React from "react";

/** Nav: displays list of existing dog names in navbar */
const Nav = ({ dogs }) => {
    return (
        <ul>
            {dogs.map((dog, idx) => (
                <li key={idx}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
            ))}
        </ul>
    );
}

export default Nav;