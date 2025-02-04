import { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"

export const UserPage = ()=>{
    const [isLogin, setLogin] = useState(true);
    const toggleLoginRegister=()=>{
        setLogin(!isLogin);

    } 
    return (<div className='container'>
        <h1 className="alert alert-info text-center">Login/Register App</h1>
        <button onClick={toggleLoginRegister} className="btn btn-primary">{isLogin?"For New User Register Click Here":"For Login CLick Here"}</button>
        &nbsp;
        <br />
        <br/>
        {isLogin?<Login/>:<Register/>
        }        
    </div>)
}