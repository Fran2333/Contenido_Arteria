import React from "react";
import { useSelector } from "react-redux";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

import { useDispatch } from "react-redux";
import { uiOpenModal } from "../actions/ui";

import  { Link } from 'react-router-dom'

import "./calendar.css";

export const Calendar = () => {
  const { name } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleClickNew = () => {
   
  }

  return (
    <div>

      <div id="main-content">
        <div className="block-header">
            <div className="row clearfix row-head">
            <div className="col-md-6 col-sm-12">
                <h2 className="h2-title">Calendario</h2>
            </div>
            <div className="col-md-6 col-sm-12 text-right flex-right">
                <ul className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/calendar">
                    <i className="icon-home"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active">Calendario</li>
                </ul>
                <Link to ="/post">
                <a
                className="btn btn-sm btn-create btn-create2 btn-new"
                >
                  
                Crear publicación
                </a>
                </Link>
            </div>
            </div>
        </div>
        <div className="container-fluid1">
          <div className="row clearfix">
            <div className="col-lg-8">
              <div className="card">
                <div className="body">
                  <CalendarScreen />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card profile-header">
                <div className="body">
                  <div className="text-center">
                    <img src="/" className="rounded-circle m-b-15" alt="" />
                    <div>
                      <h4 className="m-b-0">
                        <strong> {name}</strong>
                      </h4>
                    </div>
                    <div className="progress progress-xs m-b-25 m-t-25">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="social">
                    <span className="badge s-tiktok mb-2">TikTok</span>
                    <span className="badge s-facebook mb-2">Facebook</span>
                    <span className="badge s-instagram mb-2">Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
