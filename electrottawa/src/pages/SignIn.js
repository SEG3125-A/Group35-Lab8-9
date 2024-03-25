import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { users } from '../Data/users';
import {DashBoard} from './DashBoard';



export const SignIn=()=>{

    // State to store form data
    const [formData, setFormData] = useState({
        email: '',
        pwd: ''
    });

    // const [client, setClient] = useState({
    //     email:'',
    //     pwd:''
    // });

    const [authenticated, setAuthenticated] = useState(false);

    const [validateErrors,setValidateErrors] = useState([]);
    
    useEffect(() => {
        console.log("validate erros",validateErrors);
    },[validateErrors]);

    const history = useHistory();

    const validate = (answer)=>{
        let errors = [];
        const email = answer.email;
        const pwd = answer.pwd;

        let feedback = "";
        let regexpEmail = /^[A-Za-z0-9]+(\.)?[A-Za-z0-9]*@[A-Za-z0-9]+(\.)[A-Za-z]+$/;
        let regexpPwd = /^[A-z][a-z][0-9].{4,17}/;
        if (regexpEmail.test(email) === false){
            feedback = "Please enter a valid email address";
        }
        errors.push(feedback);
        feedback = "";
        if (regexpPwd.test(pwd) === false){
            feedback = "Password should be between 7 and 20 characters, and should start with upper case,lower and then number";
        } 
        errors.push(feedback);

        return errors;
    }
        
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const answer = formData;
        const errors = validate(answer);
        // const client = retourClient;
        // console.log("validateErr",errors[1]);
        setValidateErrors(errors);
        let flag = false;
        for (let i = 0;i<errors.length;i++){
            if (errors[i] != "") {
                flag = true;
            }
        }
        if (flag == true){
            console.log("there are still errors to fix");
        } else {
            console.log("you are good to go");

            // Fetch the data from the user.js and display hello user on the page

            for (let key in users){
                // console.log("the user",users[key].user);

                if(users[key].email == formData.email && users[key].password == formData.pwd){
                    console.log("user found");
                    setAuthenticated(true);
                    break;
                }
            }
        }
        // setFormData({email:'',pwd:''});

    }    

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setFormData({ ...formData, [name]: value });
    }

    const goToCreateAccountForm = ()=>{
        history.push("/createAccount");
    }
    return(
        <> {!authenticated ? 
            <div className='container-fluid mx-auto p-3 m-3 text-center'>
                    <h2 className="title m-3 p-3 col-md-3 col-6 mx-auto text-center border-5 border-bottom col-md-4">Please log in</h2>
                    <form className='d-flex flex-column p-3 gap-4 flex-wrap justify-content-center align-items-center' onSubmit={handleSubmit}>
                        <div className="m-3 w-50">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="email" name='email' value={formData.email} onChange={handleInputChange}/>
                            {validateErrors.length !=0 ? (validateErrors[0] != "" ?
                                    <div style={{color:"red"}}>
                                        {validateErrors[0]}
                                    </div> 
                            :<></>):<></>}
                        </div>

                        <div className="m-3 w-50">
                            <label htmlFor="pwd" className="form-label">Password</label>
                            <input type="password" className="form-control border" id="pwd" name='pwd' value={formData.pwd} onChange={handleInputChange}/>
                            {validateErrors.length !=0 ? (validateErrors[1] != "" ?
                                    <div style={{color:"red"}}>
                                        {validateErrors[1]}
                                    </div> 
                            :<></>):<></>}
                        </div>

                        
                        <div className="d-grid gap-2 d-md-flex m-3">
                            <button type="submit" className='btn customLog'>Log In</button>
                            <button type='button' onClick={goToCreateAccountForm} className='btn btn-secondary'>Create an account</button>
                        </div>

                    </form>
                </div>
            :<DashBoard user={formData}/>}
                
        </>  
    )
}