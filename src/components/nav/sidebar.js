import React from 'react'

export const Sidebar = () => {
    
    return (
    <div>
        <nav className="navbar navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-left">
                    <div className="navbar-btn">
                        <a href="/calendar"><img src="" alt="HexaBit Logo" className="img-fluid logo"/></a>
                        <button type="button" className="btn-toggle-offcanvas"><i className="lnr lnr-menu fa fa-bars"></i></button>
                    </div>
                    <a href="/" className="icon-menu btn-toggle-fullwidth icon-arrow"><i className="fa fa-arrow-left"></i></a>
                </div>          
                <div className="navbar-right">                 
                    <div id="navbar-menu">
                        <ul className="nav navbar-nav">
                            <li><a  href="/" className="icon-menu"><i className="icon-power"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    
        <div id="left-sidebar" className="sidebar">
            <div className="navbar-brand">
                <a href="/"><img src="" alt="" className="img-fluid logo"/><span>Arteria Estudio</span></a>
                <button type="button" className="btn-toggle-offcanvas btn btn-sm btn-default float-right"><i className="lnr lnr-menu fa fa-chevron-circle-left"></i></button>
            </div>
            <div className="sidebar-scroll">
                <div className="user-account">
                    <div className="user_div">
                        <img src="" className="user-photo" alt="User Profile Picture"/>
                    </div>
                    <div className="dropdown">
                        <span>Welcome,</span>
                        <a href="/" className=" user-name"><strong>hola</strong></a>
                    </div>
                </div>  
                <nav id="left-sidebar-nav" className="sidebar-nav">
                    <ul id="main-menu" className="metismenu">
                        <li><a href="/" className="menus"><i className="icon-calendar menus"></i><span>Calendar</span></a></li>
                        <li>
                            <a href="/" className="has-arrow menus"><i className="icon-globe menus"></i><span>Posts</span></a>
                            <ul>
                                <li><a href="/" className="menus">Instagram</a></li>
                                <li ><a href="/" className="menus">Facebook</a></li>
                                <li ><a href="/" className="menus">TikTok</a></li>
                            </ul>
                        </li>                     
                    </ul>
                </nav>     
            </div>
        </div>
    </div>
    )
}
