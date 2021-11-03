import React from 'react';

export const LoginScreen = () => {
    return (
        <div id="wrapper" className="auth-main">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand text-monospace2" href="/">hola texto</a>
                        </nav>
                    </div>
                    <div className="col-lg-8">
                        <div className="auth_detail2">
                            <h2>Potenciamos<br></br>El éxito de tu</h2>
                            <ul className="social-links list-unstyled">
                            <li><a className="btn btn-default" href="https://www.facebook.com/arteriaestudio.sv" data-toggle="tooltip" data-placement="top" title="facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="btn btn-default" href="https://www.behance.net/arteriaestudiosv" data-toggle="tooltip" data-placement="top" title="behance"><i className="fa fa-behance"></i></a></li>
                            <li><a className="btn btn-default" href="https://www.instagram.com/arteriaestudio.sv/?hl=es-la" data-toggle="tooltip" data-placement="top" title="instagram"><i className="fa fa-instagram"></i></a></li>
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
                                <form className="form-auth-small" action="/" method="POST   ">
                                <div className="form-group">
                                    <input type="text" name="username" placeholder="Username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input  type="password" name="password" placeholder="Password" className="form-control"/>
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