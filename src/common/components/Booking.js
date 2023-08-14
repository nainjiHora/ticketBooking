import React, { useState } from "react";
import './booking.css'
import Header from "../Header";

function Booking(){
 let totalTickets=localStorage.getItem('tickets')?JSON.parse(localStorage.getItem('tickets')):[];
    let userFromLocalStorage=localStorage.getItem('userData')
    let convertedUser=JSON.parse(userFromLocalStorage)
    
    
 var [user,setUser]=useState(convertedUser)
let ticketDetail={}

    function selectPlace(event){
ticketDetail.place=event.target.value

}

function setMembers(count){
    ticketDetail.members=count
}

function saveTicket(){

    totalTickets.push({...ticketDetail})
localStorage.setItem('tickets',JSON.stringify(totalTickets))
}

    return (
    <>
    <Header></Header>
    <div className="BookingMainDiv">
        <h1>Ticket Booking</h1>
        <h3>{user?.email}</h3>
    <div> 
        <span>Place:-</span>
        <select onChange={(e)=>selectPlace(e)}>
            <option defaultChecked>Select</option>
            <option value={'ranthambore'}>Ranthambhore</option>
            <option value={'nargadh'}>Nahargrah</option>
            <option value={'jaigadh'}>JaiGrah</option>
            <option>Amer</option>
            <option>Birla Mandir</option>
            <option>Biological Park</option>
            <option>Technology Park</option>
            <option>Ganesh Tample</option>
            <option>City Park</option>
        </select>
    </div><br/>
    <div>
        <span>Person:-</span>
        1<input type="radio" name="person"  onClick={(e)=>setMembers(1)}/>
        2<input type="radio" name="person" onClick={()=>setMembers(2)}/>
        3<input type="radio" name="person" onClick={()=>setMembers(3)}/>
        4<input type="radio" name="person"/>
        5<input type="radio" name="person"/>
        6<input type="radio" name="person"/>
        7<input type="radio" name="person"/>
        8<input type="radio" name="person"/>
        9<input type="radio" name="person"/>
        10<input type="radio" name="person"/>
    </div><br/>
    <button onClick={()=>{saveTicket()}}>Submit</button>
    </div>
    </>
    )
}

export default Booking;