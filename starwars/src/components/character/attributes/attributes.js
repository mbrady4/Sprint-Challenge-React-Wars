import React from 'react';

const Attributes = props => {
    if (!props.char) return <h1>Loading..</h1>
 
    return (
        <div>
            <h2>Identifying Features:</h2>
            <ul>
                <li className="list">{props.char.eye_color} eyes</li>
                <li className="list">{props.char.hair_color} hair</li>
                <li className="list">{props.char.height} centimeters tall</li>
                <li className="list">{props.char.mass} kilograms heavy</li>
            </ul>
        </div>
    )
};

export default Attributes; 