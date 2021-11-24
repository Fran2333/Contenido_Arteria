import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./sidebar.css"
import logo from "../../assets/images/large_negro2.png";
import logo_small from "../../assets/images/small_negro.png";
import { startLogout } from '../../actions/auth';

export const Sidebar = () => {
    
    const mostrarSideBar = () =>{
        const sidebar = document.getElementById("left-sidebar");
        const left = sidebar.style.left;


       if(left == ("-250px")){
            document.getElementById("left-sidebar").style.left = "0px";
            console.log(left)
       }
       else{
            document.getElementById("left-sidebar").style.left = "-250px";
            if(left == ""){
                document.getElementById("left-sidebar").style.left = "0px";
            }
       }
    }

    const mostrarProyectos = () =>{
        const ul = document.getElementById("proyects-ul");
        const display = ul.style.visibility;
        if(display == "hidden"){
            ul.style.visibility = "visible";
            ul.style.opacity = "1";
        }
        else{
            ul.style.visibility = "hidden";
            ul.style.opacity = "0";
        }
    }

        const dispatch = useDispatch();
        const {name} = useSelector(state => state.auth)

        const handleLogout = () => {
            dispatch(startLogout())
        }

    return (
    <div>
        <nav className="navbar navbar-fixed-top" id="nav-top">
            <div className="container-fluid">
                <div className="navbar-left">
                    <div className="navbar-btn">
                        <a href="#"><img src={logo_small} alt="Arteria Estudio" className="img-fluid logo-sm"/></a>
                    </div>
                    {/*<i className="fa fa-arrow-left" id="arrow-side" onClick={movimientoSideBar}></i>*/}
                </div>          
                <div className="navbar-right">                 
                  <div id="navbar-menu">
                        <ul className="nav navbar-nav">
                            <li className="hamb-btn" onClick={mostrarSideBar}><i className="lnr lnr-menu fa fa-bars"></i></li>
                            <li><a  href="/" className="icon-menu" onClick={handleLogout}><i className="icon-power"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </nav>
    
        <div id="left-sidebar" className="sidebar">
            <div className="navbar-brand">
                <a href="/"><img src={logo} alt="Arteria-Logo" className="img-fluid logo"/></a>
                <button type="button" className="btn-toggle-offcanvas btn btn-sm btn-default float-right">
                    <i className="lnr lnr-menu fa fa-chevron-circle-left" id="hamburguer-btn"></i>
                </button>
            </div>
            <div className="sidebar-scroll">
                <div className="user-account">
                    <div className="user_div">
                        <img src="" className="user-photo" alt="User Profile Picture"/>
                    </div>
                    <div className="dropdown">
                        <span>Bienvenido,</span>
                        <a href="/" className=" user-name"><strong>{name}</strong></a>
                    </div>
                </div>  
                <nav id="left-sidebar-nav" className="sidebar-nav">
                    <ul id="main-menu" className="metismenu">
                        <li><a href="/" className="menus"><i className="icon-calendar menus"></i><span>Calendario</span></a></li>
                        <li>
                            <a href="#" className="has-arrow menus" onClick={mostrarProyectos}><i className="icon-globe menus"></i><span>Proyectos</span></a>
                            <div id="proyects-ul">
                                <ul>
                                    <li><a href="/" className="menus">Instagram</a></li>
                                    <li ><a href="/" className="menus">Facebook</a></li>
                                    <li ><a href="/" className="menus">TikTok</a></li>
                                </ul>
                            </div>
                        </li>                     
                    </ul>
                </nav>     
            </div>
        </div>
    </div>
    )
}
