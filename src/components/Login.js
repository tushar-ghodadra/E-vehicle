import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doCustomerLogin } from "../store/actions/LoginActions"
import { Link } from 'react-router-dom';
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loggedInUser = useSelector(state => state.LoginReducer.loggedInUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doLogin = () => {
        const payload = {
            userName: username,
            password: password
        }
        dispatch(doCustomerLogin(payload))
    }


    return (
        <div className="container " style={{ display: "flex", justifyContent: "center", height: "80vh", alignItems: "center" }}>
            {
                loggedInUser !== null ?
                    navigate("/")
                    :
                    <div className='main_divv'>
                        <div className="form-group">
                            <label htmlFor='username'>Username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={e => setUsername(e.target.value)} />

                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={e => setPassword(e.target.value)} />

                        </div>

                        <div>
                            <button onClick={doLogin} className="btn btn-primary">Login</button>
                        </div>
                        <div className='new_account'>
                            <Link className="nav-link" to="/customer/signin">
                                <p className='' style={{ padding: "0px", fontWeight: "500", marginTop: "10px", cursor: "pointer" }}>Create New Account </p>
                            </Link>
                        </div>
                    </div>
            }

        </div >
    )
}

export default Login;