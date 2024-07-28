import Header from "./Header"
const Login = ()=>{
    return(
        <div>
            <Header/>
            <img className="absolute" src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <form className="absolute w-72 m-56 p-4 bg-slate-500">
                <input type="text" placeholder="Email Address" className="p-2 m-2" />
                <input type="password" placeholder="Password" className="p-2 m-2"/>
                <button className="p-2 m-4 bg-slate-300 rounded-xl">Sign In</button>
                <p>Are you new to netflix? Sign Up now!</p>
            </form>
        </div>
    )
}
export default Login;