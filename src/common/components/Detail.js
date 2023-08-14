import React, { useState } from 'react';
import './detail.css';
import Header from "../Header";

function Detail(){

    var [details,setDetails]=useState(localStorage.getItem('tickets')?JSON.parse(localStorage.getItem('tickets')):[])

    return(
    <>
    <Header></Header>
        <div className='DetailMainDiv'>
            <h1>Details </h1>
            <table border={5}>
                <tr>
                <th>Place</th><th>Members</th>
                </tr>
                { details.map((ticket)=>{return <tr>
                    <td>{ticket.place}</td>
                    <td>{ticket.members}</td>
                </tr>})}
            </table>
        </div>
    </>
    )
        
    
}

export default Detail;