import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import Modal from 'react-modal';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import Swal from 'sweetalert2';

import { uiCloseModal } from '../../actions/ui';
import {  eventClearActiveEvent, eventUpdated } from '../../actions/events';

import {DropFileInput} from '../dragdrop/drag';
import {Facebook} from '../posts/facebook';
import {Instagram} from '../posts/instragram';
import { TextAreaEmoji } from '../texarea/textarea';

import '../dragdrop/drag.css';

import './CalendarModal.css';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 5, 5, 0.529)'
      },
      content: {
        width: '95%',
        height: "610px",
        position: 'absolute',
        top: '10px',
        left: '30px',
        border: '1px solid #ccc',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
      }
};

//Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1,'hours'); // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate(),
    brand: '',
    pauta: false,
    social: '',
    files: [],
    urls: []
}


export const CalendarModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    const { activeEvent } = useSelector( state => state.calendar );
    const dispatch = useDispatch();

    const [ dateStart, setDateStart ] = useState( now.toDate() );
    const [ dateEnd, setDateEnd ] = useState( nowPlus1.toDate() );
    const [ titleValid, setTitleValid ] = useState(true);
    
    const [formValues, setFormValues] = useState( initEvent );

    const { notes, title, start, end, brand, social } = formValues;

    const [showPicker, setShowPicker] = useState(false);

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
        setDateStart( e.value );
        setFormValues({
            ...formValues,
            start: e.value
        })
    }
    
    const handleEndDateChange = ( e ) => {
        setDateEnd( e.value );
        setFormValues({
            ...formValues,
            end: e.value
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

    const onFileChange = (files, urls) => {
        setFormValues({
            ...formValues,
            files: files,
            urls: urls
        })
    }

    return (
        <>
            <Modal
                isOpen={ modalOpen }
                onRequestClose={ closeModal }
                style={ customStyles }
                closeTimeoutMS={ 200 }
                className="modal-p"
                overlayClassName="modal-fondo"
                >   
                    <div>
                    <h1 className="modal-title"> { (activeEvent)? 'Editar evento': 'Nuevo evento' } </h1>
                    <hr />
                    <form 
                        className="container"
                        onSubmit={ handleSubmitForm }
                    >

                        <div className="form-group">
                            <label>Fecha y hora inicio</label>
                            <DateTimePickerComponent 
                                onChange={ handleStartDateChange }
                                value={ dateStart }
                                minDate={ dateStart }
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha y hora fin</label>
                            <DateTimePickerComponent 
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
                            <TextAreaEmoji
                                showPicker={showPicker} 
                                setShowPicker={setShowPicker}
                                formValues={formValues} 
                                setFormValues={setFormValues}
                            />
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
                                            <input onChange={handleInputChange} className="form-check-input" type="radio" name="social" value="facebook" id="facebook-s"/>
                                            <label className="social-label" for="facebook-s">Facebook</label>
                                        </div>
                                        <div class="form-check">
                                            <input onChange={handleInputChange} className="form-check-input" type="radio" name="social" value="instagram" id="instagram-s"/>
                                            <label className="social-label" for="instagram-s">Instagram</label>
                                        </div>
                                        <div class="form-check">
                                            <input onChange={handleInputChange} className="form-check-input" type="radio" name="social" value="tiktok" id="tiktok-s"/>
                                            <label className="social-label" for="tiktok-s">TikTok</label>
                                        </div>
                                    </div>
                            <small id="emailHelp" className="form-text text-muted">Nombre de marca</small>
                        </div>

                        <div className="form-group">
                            <label>Fotos a subir: </label>
                            <DropFileInput 
                                onFileChange={(files, urls) => onFileChange(files, urls)}
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
                    </div>
                    <div className="social-media">
                        <div className="header-modal">
                            <button className="close-btn" onClick={closeModal}></button>
                        </div>
                        {social == "facebook" ? <Facebook formInfo={formValues}/> : ''}
                        {social == "instagram" ? <Instagram formInfo={formValues}/> : ''}
                    </div>
                </Modal>
        </>
    )
}
