import React, {createContext, useContext, useEffect} from "react";
import { Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"
import CustomerDetailPage from "./pages/CustomerDetailPage";

// import 'bootstrap/dist/css/bootstrap.css';

const customerContext = createContext( {} )

function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/home/:id" element={<CustomerDetailPage></CustomerDetailPage>}></Route>
      </Routes>


    </div>
  );
}
export {customerContext}
export default App;
