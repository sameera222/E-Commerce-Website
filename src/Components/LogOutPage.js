import React from 'react'
import {useNavigate} from "react-router-dom"
import {LOCAL_STORAGE_USERS_KEY} from './constants'

function LogOutPage(){
    const navigate = useNavigate()
    return(
        <>  
           <div><button onClick={()=>{       
               const result = localStorage.setItem(LOCAL_STORAGE_USERS_KEY, null)
               navigate("/LoginPage")
           }}>Log Out</button></div>
        </>
        
    )
}
export default LogOutPage;


