import React , { useContext} from 'react';
import AuthContext from "../../Context/auth";
import { Link } from 'react-router-dom';

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
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={{
                                pathname : '/about',
                                search : 'salam', // send some data to another routs
                                hash : '#about' // access to an element with special id
                            }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={location => console.log(`/contact${location.search}`)}>Contact</Link>
                            {/*get data from current route*/}
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