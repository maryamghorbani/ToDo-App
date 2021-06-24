import React , { useContext} from 'react';
import AuthContext from "../../Context/auth";


function Header() {


    const authContext = useContext(AuthContext);


    let doLogin = () => authContext.dispatch({ type : 'login_user' });
    let doLogout = () => authContext.dispatch({ type : 'logout_user' });



    return (
        <header>
            <div className="navbar navbar-dark navbar-expand-md bg-dark shadowh-sm">
                <div className="container d-flex justify-content-between">
                    <strong className="navbar-brand d-flex align-items-center">Todo App</strong>


                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>


                    {
                        ! authContext.authenticated
                        ? <button className="btn btn-sm btn-success" onClick={doLogin}>login</button>
                            : <button className="btn btn-sm btn-danger" onClick={doLogout}>logout</button>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;