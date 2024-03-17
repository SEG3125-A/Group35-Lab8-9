export const Appt = ({appt})=>{
    return (
        <div className="card border-3 border-dark" style={{width: "300px"}}>
                    <div className="card-body">
                            <div className="m-2 p-2"><b>Appointment Date:</b> {appt.date}</div>
                            <div className="m-2 p-2"><b>Employee:</b> {appt.name}</div>
                            <div className="m-2 p-2"><b>Service Type</b> {appt.serviceType}</div>
                            <div className="m-2 p-2"><b>Time</b> {appt.time}</div>

                        <a className="btn customLog">Edit</a>
                    </div>
                </div>
            


       

           
    )
}