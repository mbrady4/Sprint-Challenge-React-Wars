import React from 'react';

const Accessories = props => {
    if (!props.char) return <h1>Loading..</h1>
 
    return (
        <div>
            <h2>Possessions:</h2>
            <ul>
                <li className="list">{props.char.starships.length} starships</li>
                <li className="list">{props.char.vehicles.length} vehicles</li>
            </ul>
        </div>
    )
};

export default Accessories; 