import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import jwt_decode from 'jwt-decode'

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[auth, setAuth] = useState(false);
    const[token, setToken] = useState(null);
    
    



    const loginUser = async(values) => {
        try {
           const {data} =  await axiosClient.post("/auth/login", values);
            setToken(data.token);
           setAuth(true)
           localStorage.setItem('token', data.token)
        } catch (error) {
            console.log(error);
            setAuth(false);
            if(localStorage.getItem('token')){
                localStorage.removeItem('token');
            }
        }
    };
    const getAuth = async () =>{
        const toke = localStorage.getItem('token')
        console.log(token);
        if(toke){      
             
        
        try {
            setAuth(true)
        } catch (error) {
            console.log(error);
            setAuth(false);
            if(localStorage.getItem('token')){
                localStorage.removeItem('token');
            }
            
        }



    }};
    const authen =  ()=>{

        const token = localStorage.getItem('token')
        console.log(token);
        if(token){
            axiosClient.defaults.headers.common['token']= token

        }else{
            delete axiosClient.defaults.headers.common['token']
        }

    
    };

    

        
    const decoder = () =>{
        const data  = localStorage.getItem('token');
        const logged = jwt_decode(data)
        return logged
        };
        

        
    
    
        




    
    

    
    
    return(
        <UserContext.Provider value={{user, setUser, loginUser, auth, authen, getAuth,  decoder }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider