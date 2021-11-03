import React from 'react'
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';

export const Calendar = () => {
    return (
        <div>      
            <div id="main-content">
            <div className="block-header">
                        <div className="row clearfix">
                            <div className="col-md-6 col-sm-12">
                                <h2>Calendar</h2>
                            </div>            
                            <div className="col-md-6 col-sm-12 text-right">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/calendar"><i className="icon-home"></i></a></li>
                                    <li className="breadcrumb-item active">Calendar</li>
                                </ul>
                            
                                <a  className="btn btn-sm btn-create btn-create2" title="" data-toggle="modal" data-target="#addevent">Create New</a>
                            
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
                                                <h4 className="m-b-0"><strong>gg</strong></h4>
                                            </div>
                                            <div className="progress progress-xs m-b-25 m-t-25">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                        <span className="badge badge-default mb-2">TikTok</span>
                                        <span className="badge badge-info mb-2">Facebook</span>
                                        <span className="badge badge-danger mb-2">Instagram</span>
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
