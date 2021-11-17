import { types } from '../types/types';
import { fetchSinToken, fetchConToken } from "../helpers/fetch"

export const startLogin = (email, password) => {
    return async(dispatch) => {

        const resp = await fetchSinToken('auth',{email,password}, 'POST');
        const body = await resp.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch( login({
                uid: body.uid,
                name: body.name
            }))
        }

    }
}

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch( login({
                uid: body.uid,
                name: body.name
            }))
        }else{
            dispatch(checkingFinish())
        }

    }
}

const checkingFinish = () =>({type: types.authCheckingFinish})

const login = (user) =>({
    type: types.authLogin,
    payload: user
})

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })