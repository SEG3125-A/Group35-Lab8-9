import './styles/Faq.css'
import { useState } from 'react';
import { Info } from '../components/Info';

import { users } from "../Data/users";
import { appointments } from '../Data/users';

import { Appt } from '../components/Appt';


export const DashBoard = ({user})=>{

    const [activeItem,setActiveItem] = useState("info");

    const userCurrent = user;
    let userConnected = {};
    let appt = [];

    
    for (let key in users){
        // console.log("the user",users[key].user);

        if(users[key].email == userCurrent.email){
            userConnected = users[key];
            break;
        }
    }

    for (let i in appointments){
        if (appointments[i].email == userConnected.email){
            appt.push(appointments[i]);
        }
    }


    return(
        <>
            <h2 className='text-center p-3'>Hello  {userConnected.fName+ " " + userConnected.lName}</h2>

            <div style={{height:"100vh"}} className="container d-flex flex-row">
            

                <div style={{height:"100%"}} className="h-100 text-center col-md-3 bg-secondary">
                    <nav className="nav flex-column gap-2 nav-pills p-2 align-items-center">
                        <a onClick={()=>setActiveItem("info")} className={`nav-link nav-linkCustom w-100 center ${activeItem == 'info' ? 'active':''}`} aria-current="page" href='#info'>Account Info</a>
                        <a onClick={()=>setActiveItem("appt")} className={`nav-link nav-linkCustom w-100 center ${activeItem == 'appt' ? 'active':''}`} href='#appt'>Your appointments</a>
                    </nav>
                </div>

                <div className="mh-100 container-fluid text-center flex-wrap bg-colorCustom">
                    {activeItem == 'appt' ?
                            <div id='appt' className='d-flex flex-row p-3 gap-4 flex-wrap justify-content-center'>
                            <h2 className='title m-3 p-3 col-md-3 col-6 mx-auto text-center border-5 border-bottom col-md-8'>Your appointments</h2>
                                {appt.map((item)=>{
                                    return(
                                        <Appt key={item.time} appt = {item}/> 
                                    )
                                })}
                            </div>:
                                <Info user = {userConnected}/>
                    }
                </div>

            </div>
        </>

    )
   

}