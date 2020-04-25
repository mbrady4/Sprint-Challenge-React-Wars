import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1em;
    margin: 1em 0em;
    padding: 0.25em 1em;
    border-radius: 8px;
    font-family: 'Impact', 'Charcoal', 'sans-serif';
`;

const Button = props => {
    if (!props.charNum) return <h1>Loading..</h1>

    return (
        <StyledButton 
            onClick={e => props.changeChar(props.charNum+1)}
        >
        Next Character
        </StyledButton>
    )
};

export default Button;