import React from 'react';
import styled from "styled-components";

const Heading = styled.h1`
    font-size:48px;
    padding-bottom:0;
    margin-bottom:0;
`;

const Subtext = styled.p`
    font-size:1.6rem;
    padding-top:0;
    margin-top:0;
    font-style: italic;
`;


const Name = props => {
    if (!props.char) return <h1>Loading..</h1>
 
    return (
        <div>
            <Heading>{props.char.name}</Heading>
            <Subtext>{props.char.name} is a {props.char.gender} born in {props.char.birth_year}.</Subtext>
        </div>
    )
}

export default Name; 