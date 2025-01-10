import { useParams } from "react-router-dom";
import React from "react";

/** DogDetails: shows all of the information about a single dog */
const DogDetails = () => {
    const dog = useParams();
    return (
        <div>
            <h2>{dog.name}</h2>
            <ul>
                <li>{dog.age}</li>
                <li><img src={`/public/${dog.src}.jpg`} /></li>
                <ul>
                    {dog.facts.map((fact, idx) => (
                        <li>{fact}</li>
                    ))}
                </ul>
            </ul>
        </div>
    );
}

export default DogDetails;