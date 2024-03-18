
export const Info = ({user})=>{

   


    return (
        <div className="container-fluid mx-auto p-3 d-flex flex-column">
            <h2 className="title m-3 p-3 col-md-3 col-6 mx-auto text-center border-5 border-bottom col-md-8">Your account info</h2>



            <div className="m-2 p-2"><b>First Name:</b> {user.fName}</div>
            <div className="m-2 p-2"><b>Last Name:</b> {user.lName}</div>
            <div className="m-2 p-2"><b>Phone:</b> {user.phone}</div>
            <div className="m-2 p-2"><b>email:</b> {user.email}</div>

           
        </div>
    )

}