import { Navigate, useParams } from "react-router-dom";
import React from "react";

/** DogDetails: shows all of the information about a single dog */
const DogDetails = ({ dogs }) => {
    const params = useParams();
    const curr_dog = dogs.find(dog => dog.name === params.name);

    if (!curr_dog) return <Navigate to="/dogs" />

    return (
        <div>
            <h2>{curr_dog.name}</h2>
            <ul>
                <li>{curr_dog.age}</li>
                <li><img src={`/${curr_dog.src}.jpg`} alt={curr_dog.name} /></li>
                <ul>
                    {curr_dog.facts.map((fact, idx) => (
                        <li key={idx}>{fact}</li>
                    ))}
                </ul>
            </ul>
        </div>
    );
}

export default DogDetails;