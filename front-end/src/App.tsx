// import { useState } from 'react'
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
//   const [count, setCount] = useState(0)

  const [page, setPage] = useState("Home");


  return (
    <>
        <Navbar setPage={setPage} />
        <div className="m-4">
          { page === "Home" ? <Home /> : ""}
          { page === "MyProfile" ? <MyProfile /> : ""}
          { page === "SignIn" ? <SignIn setPage={setPage}/> : ""}
          { page === "SignUp" ? <SignUp setPage={setPage}/> : ""}
        </div>
    </>
  )
}

export default App;
