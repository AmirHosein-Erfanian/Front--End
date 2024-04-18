import {React,useState} from "react";
import Login from './Login';
import Register from './Register';

const LoginRegister = () => {
    const [pageType, setPageType] = useState("login");
    const handleChangePageType = () => {
      setPageType(pageType === "login" ? "register" : "login");
    };
    return (
      <>
        {pageType === "login" ? (
          <Login handleChangePageType={handleChangePageType} />
        ) : (
          <Register handleChangePageType={handleChangePageType} />
        )}
      </>
    );
}

export default LoginRegister;