import React from 'react';
import Typed from 'react-typed';
import {useDispatch} from 'react-redux';
import {useForm} from '../../hooks/useForm'
import { startLogin } from '../../actions/auth';
import './LoginScreen.css';
import logo from '../../assets/images/large_blanco2.png'




const textLines = [
    `Marca`,
    `Restaurante`,
    `Marca de ropa`,
    `Pastelería`,
     `Beauty shop`,
     `Coffe shop`,
     `Tienda de zapatos`,
     `Estudio de arquitectura`,
     `Pop up shop`,
     `Paletería`,
     `Tienda de accesorios`
];

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm({
            lEmail: 'francisco1@gmail.com',
            lPassword: '12345678'
    });

    const {lEmail, lPassword} = formLoginValues;

    const handleLogin = (e) =>{
        e.preventDefault();

        dispatch(startLogin (lEmail, lPassword))
    }

    return (
        <div id="wrapper" className="auth-main">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg">
                            <img src={logo} className="logo"/>
                        </nav>
                    </div>
                    <div className="col-lg-8">
                        <div className="auth_detail2">
                            <h2>Potenciamos<br></br>El éxito de tu</h2>
                            <div>
                                <Typed strings={textLines} typeSpeed={100} backSpeed={60} className="typed"/>
                            </div>
                            <ul className="social-links list-unstyled">
                            <li><a className="btn btn-default" href="https://www.facebook.com/arteriaestudio.sv" data-toggle="tooltip" data-placement="top" title="facebook"><i className="fab fa-facebook"></i></a></li>
                            <li><a className="btn btn-default" href="https://www.behance.net/arteriaestudiosv" data-toggle="tooltip" data-placement="top" title="behance"><i className="fab fa-behance"></i></a></li>
                            <li><a className="btn btn-default" href="https://www.instagram.com/arteriaestudio.sv/?hl=es-la" data-toggle="tooltip" data-placement="top" title="instagram"><i className="fab fa-instagram"></i></a></li>
                            <li><a className="btn btn-default" href="https://www.arteriaestudio.com/" data-toggle="tooltip" data-placement="top" title="web"><i className="fa fa-globe"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="header">
                                <p className="lead">Login to your account</p>
                            </div>
                            <div className="body">
                                <form className="form-auth-small" action="/" method="POST" onSubmit={handleLogin}>
                                <div className="form-group">
                                    <input type="text" name="lEmail" value = {lEmail} onChange={handleLoginInputChange} placeholder="Username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input  type="password" name="lPassword" value= {lPassword} onChange={handleLoginInputChange} placeholder="Password" className="form-control"/>
                                </div>
                                <button className="btn btn-color btn-lg btn-block">LOGIN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}