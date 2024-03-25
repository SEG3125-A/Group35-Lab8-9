import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputMask from 'react-input-mask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';


export const CreateAccount = ()=>{
    // Function to validate family name, first name

    const validateName = (nom,res)=>{
    let feedback = "";

    if (nom.length <=1){
        feedback = "Name should have more than 1 characters";
    }
    res.push(feedback);
    return res;
    }

    const validateEmail = (email,res)=>{
        let feedback = "";
        let regexp = /^[A-Za-z0-9]+(\.)?[A-Za-z0-9]*@[A-Za-z0-9]+(\.)[A-Za-z]+$/;
        if (regexp.test(email) == false){
            feedback = "Please enter  a valid email"
        }
        res.push(feedback);
        return res;
    }

    const validateSamePwd = (arrPwd,res)=>{
        let feedback = "";
        if (arrPwd[0].length < 5 || arrPwd[1].length >20){
            feedback = "Password should have between 5 and 20 characters"
        }
        else if (arrPwd[0]!=arrPwd[1]){
            feedback = "The two passwords arent the same";
        }
        res.push(feedback)
        res.push(feedback);
        return res;
    }


    const validateAllfields = (answer) =>{
        console.log("the answer to be validated is",answer);
        let res1 = [];
        let res2 = [];
        let res3 = [];
        let items = [];
        for (let key in answer){
            console.log(key);
            // items.push(answer[key]);
            if (key == "fName" || key == "lName"){
                res1 = validateName(answer[key],res1);
            }else if(key == "email"){
                res2 = validateEmail(answer[key],res2);
            }else if (key == "pwd"){
                res3 = validateSamePwd([answer[key],answer["pwdConfirmed"]],res3);
            }
        }
        let res = res1.concat(res2,res3);
        // console.log("at the end",items);
        return res;
    }
    

    // State to store form data
    const [formData, setFormData] = useState({
        fName: '',
        lName:'',
        email:'',
        pwd:'',
        pwdConfirmed:'',
        phone:''
    });

    // State that stores erros
    const [submitted,setSubmitted] = useState(false);
    const [error,setError] = useState([]);

    


    // This handles all our inputs

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
       
        setFormData({ ...formData, [name]: value });
        
        // For debugging purposes

        // console.log("target",target);
        // console.log("name",name);
        // console.log("value",value);
        // console.log("formData",formData);
    }

    // navigate from a page to another

    const history = useHistory();
    const [shown,setShown] = useState(false);

    const handleClose = ()=>{
        setShown((prev)=>!prev);
    }

    // Handles our submit event

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("formData",formData);
        // console.log("the complete form is",formData);
        // console.log("validation result",validationResult);
        let err = validateAllfields(formData);
        setError(err);
        let flag = false;

        for (let i = 0;i<err;i++){
            if (err[i] != ""){
                flag = true;
            }
        }

        if (flag == true){
            console.log("there are still errors to fix");
            setShown(true);
        } else{
            console.log("fields are ready to be submitted");
        }



        // Set error state to what you found


        // flag used to track whether we submit to backend or we wait for user to fix its errors


       
    }

    const backHomePage = (event)=>{
        console.log("navigating back to home ...");
        history.push('/');
    }

    return(
        // <div>I am the create account form</div>
        <>
            <h2 className="text-center p-3">Create account</h2>
            <p className="p-3 ">* Please make sure to complete all fields</p>
            <form noValidate onSubmit={handleSubmit} className="mx-auto text-center">

                <div className="d-grid gap-2 d-md-flex m-3">
                    <div>
                        <label htmlFor="prenom" className="form-label">First Name</label>
                        <input required type="text" className="form-control border" id="prenom" name='fName' value={formData.fName} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="nomFamille" className="form-label">Last Name</label>
                        <input required type="text" className="form-control border" id="nomFamille" name='lName' value={formData.lName} onChange={handleInputChange}/>
                    </div>
                </div>

               

             

                <div className="d-grid gap-2 d-md-flex m-3">
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input required type="email" className="form-control border" id="email" name='email' value={formData.email} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="motDePasse" className="form-label">Password</label>
                        <input required type="password" className="form-control border" id="motDePasse" name='pwd' value={formData.pwd} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="motDePasseConfirme" className="form-label">Password Confirmed</label>
                        <input required type="password" className="form-control border" id="motDePasseConfirme" name='pwdConfirmed' value={formData.pwdConfirmed} onChange={handleInputChange}/>
                    </div>
                </div>


                <div className="d-grid gap-2 d-md-flex m-3">
                    <button type="submit" className='btn btn-primary'>{submitted ? 'soumission...':'Create Account'}</button>
                    <button type='button' onClick={backHomePage} className='btn btn-secondary'>Cancel</button>
                </div>
            </form>


            <Modal show={shown} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title key={'title'}>Errors detected</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* {console.log(filterError,typeof(filterError))} */}
                    {error.map((itemErr,index)=>(
                        itemErr?<li id={`error${index}`} key={`error${index}`}>{itemErr}</li>:<></>
                    ))}
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </>  )
}