import React from 'react'
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import './calendar.css';

export const Calendar = () => {
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
                                <li className="breadcrumb-item"><a href="/calendar"><i className="icon-home"></i></a></li>
                                <li className="breadcrumb-item active">Calendario</li>
                            </ul>
                            
                            <a  className="btn btn-sm btn-create btn-create2 btn-new" title="" data-toggle="modal" data-target="#addevent">Crear publicación</a>
                        </div>
                    </div>
                </div>

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
            <div className="modal fade" id="addevent" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="title" id="defaultModalLabel">Add Event</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <div className="form-line">
                                    <input type="number" className="form-control" placeholder="Event Date"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-line">
                                    <input type="text" className="form-control" placeholder="Event Title"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-line">
                                    <textarea className="form-control no-resize" placeholder="Event Description..."></textarea>
                                </div>
                            </div>       
                        </div>x
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Add</button>
                            <button type="button" className="btn btn-simple" data-dismiss="modal">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
