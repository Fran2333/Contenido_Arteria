import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import './modal.css';

//import {FilePonds} from '../filepond/fpond';

import {DropFileInput} from '../dragdrop/drag';

 const style = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(5, 5, 5, 0.529)'
    },
    content: {
      width: '550px',
      height: "610px",
      position: 'absolute',
      top: '10px',
      left: '375px',
      border: '1px solid #ccc',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
    }
 }


export const Modl = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const dispatch = useDispatch();
    const handleClickNew = () => {
        dispatch( uiOpenModal() );
    }

    function afterOpenModal(){
        const fechaActual = new Date();
        const dia = fechaActual.getDay();
        const mes = fechaActual.getMonth() + 1;
        const anio = fechaActual.getFullYear();

        const dateInicio = document.getElementById("date-inicio");
        dateInicio.value = dia+"/"+mes+"/"+anio;

        const dateFin = document.getElementById("date-fin");
        dateFin.value = (dia+1)+"/"+mes+"/"+anio;
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div>
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
                            
                        <a  className="btn btn-sm btn-create btn-create2 btn-new"  onClick={ handleClickNew }>Crear publicación</a>
                    </div>
                </div>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                onAfterOpen={afterOpenModal}
                closeTimeoutMS={500}
                style={style}
                contentLabel="Modal-Publicacion"
                className="Modal-P visible"
            >
            <div className="modal-content">
                <div className="modal-header">
                    <button className="btnCancel" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    <h2 className="post-title">Nueva publicación</h2>
                    <form>
                        <div className="select-content">
                            <label className="form-title">Seleccionar marca:</label>
                            <select className="form-select" name="brand" id="brandSelect">
                                <option value=""disabled>Seleccione una opción</option>
                            </select>
                        </div>
                        <div className="radio-content">
                            <label className="form-title">Publicación pautada:</label>
                            <div className="radio-flex">
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="pauta" value="true"/>
                                    <label className="social-label">Si</label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="pauta" value="false"/>
                                    <label className="social-label">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="radio-content">
                            <label className="form-title">Seleccionar la red social:</label>
                            <div className="radio-flex">
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="social" value="facebook"/>
                                    <label className="social-label">Facebook</label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="social" value="instagram"/>
                                    <label className="social-label">Instagram</label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="social" value="tiktok"/>
                                    <label className="social-label">TikTok</label>
                                </div>
                            </div>
                        </div>
                        <div className="date-content">
                            <label className="form-title">Seleccionar fecha de inicio:</label>
                            <input className="date-input" id="date-inicio" type="datetime-local" name="fechaInicio"/>
                        </div>
                        <div className="date-content">
                            <label className="form-title">Seleccionar fecha de fin:</label>
                            <input className="date-input" id="date-fin" type="datetime-local" name="fechaFin"/>
                        </div>
                        <div className="description-content">
                            <label className="form-title">Agregar descripción:</label>
                            <textarea className="area-description" name="descripcionArea" rows="6" placeholder="Agrega la descripción del post"></textarea>
                        </div>
                        <div className="galery-content">
                            <DropFileInput 
                                onFileChange={(files) => onFileChange(files)}
                            />
                        </div>
                        <div className="btn-content">
                            <button className="btnCan" onClick={closeModal}>Cancelar</button>
                            <button type="submit" className="btnAccept">Aceptar</button>
                        </div>
                    </form>
                </div>
            </div>
            </Modal>
        </div>

        
    );
}




