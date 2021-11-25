import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';

import { uiCloseModal } from '../../actions/ui';
import {  eventClearActiveEvent, eventUpdated } from '../../actions/events';

import {DropFileInput} from '../dragdrop/drag';

import '../dragdrop/drag.css';

import './CalendarModal.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      overflowY             : 'scroll'
    }

};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1,'hours'); // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
}


export const CalendarModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const { activeEvent } = useSelector( state => state.calendar );
    const dispatch = useDispatch();

    const [ dateStart, setDateStart ] = useState( now.toDate() );
    const [ dateEnd, setDateEnd ] = useState( nowPlus1.toDate() );
    const [ titleValid, setTitleValid ] = useState(true);
    
    const [formValues, setFormValues] = useState( initEvent );

    const { notes, title, start, end } = formValues;

    useEffect(() => {
        if ( activeEvent ) {
            setFormValues( activeEvent );
        } else {
            setFormValues( initEvent );
        }
    }, [activeEvent, setFormValues])



    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }


    const closeModal = () => {
        // TODO: cerrar el modal
        dispatch( uiCloseModal() );
        dispatch( eventClearActiveEvent() );
        setFormValues( initEvent );
    }

    const handleStartDateChange = ( e ) => {
        setDateStart( e );
        setFormValues({
            ...formValues,
            start: e
        })
    }
    
    const handleEndDateChange = ( e ) => {
        setDateEnd( e );
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        const momentStart = moment( start );
        const momentEnd = moment( end );

        if ( momentStart.isSameOrAfter( momentEnd ) ) {
            return Swal.fire('Error','La fecha fin debe de ser mayor a la fecha de inicio', 'error');
        }

        if ( title.trim().length < 2 ) {
            return setTitleValid(false);
        }

    {/* if ( activeEvent ) {
            dispatch( eventUpdated( formValues ) )
        } else {
            dispatch( eventStartAddNew( formValues ) ); jajaja
        }*/}


        setTitleValid(true);
        closeModal();
        
    }

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            <h1 className="modal-title"> { (activeEvent)? 'Editar evento': 'Nuevo evento' } </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={ dateStart }
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={ handleEndDateChange }
                        value={ dateEnd }
                        minDate={ dateStart }
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={ `form-control ${ !titleValid && 'is-invalid' } `}
                        placeholder="Titulo"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Descripcion"
                        rows="5"
                        name="notes"
                        value={ notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <div className="form-group">
                    <label className="form-title">Seleccionar marca:</label>
                            <select className="form-select" name="brand" id="brandSelect">
                                <option value=""disabled>Seleccione una opción</option>
                            </select>
                    <small id="emailHelp" className="form-text text-muted">Nombre de marca</small>
                </div>

                <div className="form-group">
                    <label className="form-title">Publicación pautada:</label>
                    <div className="radio-flex">
                            <div class="form-check">
                                    <input className="form-check-input" type="radio" name="pauta" value="true" id="si-p"/>
                                    <label className="social-label" for="si-p">Si</label>
                            </div>
                            <div class="form-check">
                                    <input className="form-check-input" type="radio" name="pauta" value="false" id="no-p"/>
                                    <label className="social-label" for="no-p">No</label>
                            </div>
                    </div>
                    <small id="emailHelp" className="form-text text-muted">Nombre de marca</small>
                </div>

                <div className="form-group">
                <label className="form-title">Seleccionar la red social:</label>
                            <div className="radio-flex">
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="social" value="facebook" id="facebook-s"/>
                                    <label className="social-label" for="facebook-s">Facebook</label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="social" value="instagram" id="instagram-s"/>
                                    <label className="social-label" for="instagram-s">Instagram</label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="social" value="tiktok" id="tiktok-s"/>
                                    <label className="social-label" for="tiktok-s">TikTok</label>
                                </div>
                            </div>
                    <small id="emailHelp" className="form-text text-muted">Nombre de marca</small>
                </div>

                <div className="form-group">
                    <label>Fotos a subir: </label>
                    <DropFileInput 
                        onFileChange={(files) => onFileChange(files)}
                    />
                    <small id="emailHelp" className="form-text text-muted">Fotos para el post</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
