import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setSigninForm] = useState(true);
  const [errorMessage, setErrorMessge] = useState(null)

  const navigate = useNavigate()

  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setSigninForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    console.log(msg);
    setErrorMessge(msg);

    if(msg) return;

    if(!isSignInForm){
        //sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessge(errorCode + '-' + errorMessage)
    // ..
  });
    }else{
        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessge(errorCode - errorMessage);
  });
    }
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <form
        onSubmit={(e)=>e.preventDefault()}
        className="absolute w-72 m-56 p-4 bg-slate-500"
      >
        <h2>{isSignInForm ? "Sign in" : "Sign Up"}</h2>
        {!isSignInForm && (
          <input type="text" placeholder="Full Name" className="p-2 m-2" />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 m-4 bg-slate-300 rounded-xl"
        >
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSigninForm}>
          {isSignInForm
            ? "Are you new to netflix? Sign Up now!"
            : "Already User? Sign in"}
        </p>
      </form>
    </div>
  );
};
export default Login;
