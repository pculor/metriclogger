import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { axios } from '../../utils/axios';


const Chart = (props:any) => {
    return (
        <Container className="table">

            <InputWrapper>
            <label htmlFor="metric1">Metric One</label>
            <input type="text" />
            </InputWrapper>
            <InputWrapper>
            <label htmlFor="metric1">Metric Two</label>
            <input type="text" />
            </InputWrapper>
            <InputWrapper>
            <label htmlFor="metric1">Metric Three</label>
            <input type="text" />
            </InputWrapper>
            <ButtonWrapper>
            <button>Submit</button>
            </ButtonWrapper>
            
        </Container>
    ) 
}

export default Chart;

const Container = styled.div`
    background-color: white;
    max-width: 600px;
    /* max-height: 500px; */
    overflow-y: scroll;
    width: 100%;
    padding: 30px 15rem;
    border: 1px solid #C3CFD9;
    /* box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1); */
    border-radius: 6px;
    margin: 0 auto;
    margin-top: 5rem;
    
`;

const InputWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 1rem;
input{
    padding: 0.5rem;
    outline: none;
    border: thin solid grey;
}
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
margin: 3rem;
button{
    outline: none;
    padding: 0.5rem 1rem;
    background-color: #000;
    color: #fff;
    border: thin solid transparent;
}
`