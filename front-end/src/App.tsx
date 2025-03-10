// import { useState } from 'react'
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import Promo from "./components/Promo";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
//   const [count, setCount] = useState(0)

  const [page, setPage] = useState("Home");


  return (
    <div className="container-fluid">
        <Navbar setPage={setPage} />
        <div>
          { page === "Home" ? <Home /> : ""}
          { page === "MyProfile" ? <MyProfile /> : ""}
          { page === "SignIn" ? <SignIn setPage={setPage}/> : ""}
          { page === "SignUp" ? <SignUp setPage={setPage}/>: ""}
          {/* { page === "SignUp" ? <Promo />: ""} */}
        </div>
    </div>
  )
}

export default App;
