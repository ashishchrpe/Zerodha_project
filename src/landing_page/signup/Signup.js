import React, {  useState } from "react";
import {Link, useNavigate} from "react-router-dom";




function Signup(){

    const [cont, setCount]=useState([{username:"",email:"",password:""}]);
    const navigate= useNavigate();
    let changeState=(event)=>{
       setCount((currname)=>{
        return{...currname,[event.target.name]:(event.target.value)}
       })
    };
    let handleSubmit=async(event)=>{
     event.preventDefault();   
     
     const data=await fetch('https://zerodha-backend-zb72.onrender.com/signup',{
        method:'POST',
       
        body:JSON.stringify(cont),
        headers:{
          'Content-Type':'application/json'
        }
      }
     
    );
      getHandle();
      
    };
    
  let getHandle=async()=>{
    const data=await fetch('https://zerodha-backend-zb72.onrender.com/signup',{
        method:'GET',
      }
     
    );
      Redirect();
     
  };
  let Redirect=()=> {

    navigate("/dashboard");
  }
    return(
        <div className="container">
            <div className="row my-5 p-5">
                <div className=" col-6 mt-5"> 
                    <img src="media/images/signup.png" style={{width:"90%"}}/>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <h1 className="fs-3 pt-5 mt-5">Signup now</h1>
                    <h2 className="fs-5 my-4 text-muted">Or track your existing application</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" >Username</label>
                        <input className="mb-2" type="text" name="username" id="username" placeholder="enter username" onChange={changeState} required/>
                        <p className="mt-2">
                        <label htmlFor="email" className="mr-2" >Email</label>
                        <input  type="email" id="email" name="email" onChange={changeState} placeholder="enter user email id!" required/>
                        </p>
                        <label htmlFor="password" >Password</label>
                        <input className="mb-2" type="password" id="password" name="password" onChange={changeState} placeholder="enter password" required/>
                        <br/>
                        <button style={{width:"40%" ,margin:"0 auto"}} className="p-2 mb-3 mt-23 fs-5 btn btn-primary">continue</button>
                    </form>
                    
                    
                    
                     <Link class="nav-link active " style={{color:"blue"}} to={"/login"}>Want to open an NRI account?/Login</Link>
                          
                </div>
                <div className="text-center mt-5 ">
                        <p style={{fontSize:"12px" ,color:'rgb(119, 110, 118)'}}>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit <a href="" style={{textDecoration:"none" }}> this article</a> to know more.</p>
                      
                        <p style={{fontSize:"12px" ,color:'rgb(119, 110, 118)'}}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href="" style={{textDecoration:"none" }}>offline forms</a> . For help, <a href="" style={{textDecoration:"none" }}>click here</a>.</p>
                </div>
             
            </div>

        </div>
    )
}

export default Signup;