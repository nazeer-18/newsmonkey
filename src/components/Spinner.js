import React from 'react';
import spinner from '../Spinner-3.gif'
export default function Spinner() {
        return(
            <center>
            <img className="mb-3" src={spinner} alt="loading"></img>
            </center>
        )
}