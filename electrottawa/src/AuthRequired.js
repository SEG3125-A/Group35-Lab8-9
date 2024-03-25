import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const AuthRequired = ({ children,isLoggedIn })=>{


    // const [isLoggedIn, setIsLoggedIn] = useState(false);


    // If user is not logged in, redirect to signIn page
    if (!isLoggedIn) {
        return (<Redirect to="/signIn" />);
    }

    // If user is logged in, render the children (e.g., Dashboard)
    return children;
}