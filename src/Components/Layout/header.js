import React , { useContext} from 'react';
import AuthContext from "../../Context/auth";
import { NavLink } from 'react-router-dom';

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
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeStyle={{
                                backgroundColor : 'pink',
                                borderRadius : '4px'
                            }}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
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