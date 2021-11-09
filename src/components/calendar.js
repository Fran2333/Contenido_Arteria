import React from 'react'
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import {Modl} from './modal/modal';
import {ModalPost} from './modal/modal-post';

import './calendar.css';

export const Calendar = () => {
    return (
        <div>      
            <div id="main-content">
                <Modl/>
                <ModalPost />
                <div id="modal-content"></div>

                <div className="container-fluid">

                        <div className="row clearfix">
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="body">
                                    <FullCalendar
                                        plugins={[ dayGridPlugin ]}
                                        initialView="dayGridMonth"
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card profile-header">
                                    <div className="body">
                                        <div className="text-center">
                                            <img src="/" className="rounded-circle m-b-15" alt=""/>
                                            <div>
                                                <h4 className="m-b-0"><strong>Nombre Usuario</strong></h4>
                                            </div>
                                            <div className="progress progress-xs m-b-25 m-t-25">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                </div>
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
    )
}
