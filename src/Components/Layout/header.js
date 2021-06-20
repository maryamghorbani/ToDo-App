import React , { useContext} from 'react';
import AuthContext from "../../Context/auth";


function Header() {


    const authContext = useContext(AuthContext);


    return (
        <header>
            <div className="navbar navbar-dark bg-dark shadowh-sm">
                <div className="container d-flex justify-content-between">
                    <strong className="navbar-brand d-flex align-items-center">Todo App</strong>
                    <button className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                </div>
            </div>
        </header>
    )
}

export default Header;