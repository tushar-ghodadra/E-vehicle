import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doCustomerLogin, doCustomerSignup } from "../../store/actions/LoginActions"
import { Link } from 'react-router-dom';
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tempSignPayload, setTempSignPayload] = useState({})
    const [validation, setValidation] = useState(false)
    // const loggedInUser = useSelector(state => state.SignupInUser.SignupInUser);
    const [state, setState] = useState({
        firstname: '',
        email: '',
        phonenumber: '',
        pincode: '',
        city: '',
        username: '',
        password: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doLogin = () => {
        const payload = {
            userName: state.userName,
            email: state.email,
            phonenumber: state.phonenumber,
            pincode: state.pincode,
            city: state.city,
            username: state.username,
            password: state.password
        }
        dispatch(doCustomerSignup(payload))
    }
    const handleSignUpdata = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
        checkIfvalidate()

    }
    const checkIfvalidate = () => {
        let valid = false;
        valid = state.userName &&
            state.email &&
            state.phonenumber &&
            state.city &&
            state.password &&
            state.username &&
            state.pincode ? true : false
        setValidation(valid)

    }
    return (
        <div className="container " style={{ display: "flex", justifyContent: "center", height: "80vh", alignItems: "center" }}>


            <div className='main_divv'>

                <div className="form-group">
                    <label htmlFor='username'>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="userName"
                        // value={username}
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter First Name"
                    />

                </div>

                <div className="form-group">
                    <label htmlFor='username'>Email  </label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        // value={username}
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Email"

                    />

                </div>

                <div className="form-group">
                    <label htmlFor='username'>Phone Number  </label>
                    <input
                        type="text"
                        className="form-control"
                        name="phonenumber"
                        // value={username}
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Phone Number"

                    />

                </div>
                <div className="form-group">
                    <label htmlFor='username'>City  </label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        // value={username}
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Phone Number"

                    />

                </div>
                <div className="form-group">
                    <label htmlFor='username'>Post Code  </label>
                    <input
                        type="text"
                        className="form-control"
                        name="pincode"
                        // value={username}
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Post Code"

                    />

                </div>
                {/* <div className="form-group">
                            <label htmlFor='username'>Username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={e => setUsername(e )} />

                        </div> */}
                <div className="form-group">
                    <label htmlFor='username'>User Name </label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        // value={username}
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Last Name"

                    />

                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        // value={password}
                        onChange={e => handleSignUpdata(e)}
                        placeholder="Enter Password"

                    />

                </div>

                <div>
                    <button onClick={doLogin} className="btn btn-primary" disabled={!validation}>SignUp</button>
                </div>

            </div>


        </div >
    )
}

export default Login;