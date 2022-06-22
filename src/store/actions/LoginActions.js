import axios from 'axios';


export function doCustomerLogin(payload) {
    return (dispatch) => {
        return axios.post("http://localhost:8085/customer/login", payload).then(
            resp => {
                console.log(resp);
                localStorage.setItem("myUser", JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
                window.location.href = "/"
            }
        )
            .catch(error => {
                console.log(error);
            })
    }
}
export function doCustomerSignup(payload) {
    return (dispatch) => {
        return axios.post("http://localhost:8085/user/save", payload).then(
            resp => {
                console.log("responce", resp);
                 localStorage.setItem("myUser", JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
                 window.location.href = "/"
            }
        )
            .catch(error => {
                console.log(error);
            })
    }
}



export function doLoginSuccess(data) {

    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

export function doSignUpSuccess(data) {

    return {
        type: "SIGNUP_SUCCESS",
        payload: data
    }
}