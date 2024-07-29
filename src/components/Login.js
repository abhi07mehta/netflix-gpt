import { useState } from "react"
import Header from "./Header"
const Login = ()=>{

    const [isSignInForm, setSigninForm] = useState(true)

    const toggleSigninForm = ()=>{
        setSigninForm(!isSignInForm)
    }

    return(
        <div>
            <Header/>
            <img className="absolute" src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <form className="absolute w-72 m-56 p-4 bg-slate-500">
                <h2>{isSignInForm?"Sign in":"Sign Up"}</h2>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 m-2" />}
                <input type="text" placeholder="Email Address" className="p-2 m-2" />
                <input type="password" placeholder="Password" className="p-2 m-2"/>
                <button className="p-2 m-4 bg-slate-300 rounded-xl">{isSignInForm?"Sign in":"Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleSigninForm}> {isSignInForm?"Are you new to netflix? Sign Up now!":"Already User? Sign in"} </p>
            </form>
        </div>
    )
}
export default Login;