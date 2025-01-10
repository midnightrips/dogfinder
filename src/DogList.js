import React from "react";

/** DogList: takes all given dog info */
const DogList = ({ dogs }) => {

    return (
        <div>
            <h1>Homepage!</h1>
            <ul>
                {dogs.map((dog, idx) => (
                    <li key={idx}>{dog.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DogList;