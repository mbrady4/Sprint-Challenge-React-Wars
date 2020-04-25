import React from 'react';
import Name from './name/name.js'
import Attributes from './attributes/attributes.js'
import Accessories from './accessories/accessories.js'

const Character = props => {
    
    return (
        <div className='character'>
            <Name char={props.character} />
            <Attributes char={props.character} />
            <Accessories char={props.character} />
        </div>
    )
}

export default Character; 