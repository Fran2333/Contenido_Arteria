import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { Facebook } from '../posts/facebook.js';
import { Instagram } from '../posts/instragram.js';
import { uiOpenModal } from '../../actions/ui';

import "./modal-post.css"


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
      width: '640px',
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


export const ModalPost = ({modalIsOpen, setIsOpen, formInfo, editInfo}) => {

    
    function closeModal() {
        setIsOpen(prevent => !prevent)
    }

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={500}
        style={style}
        contentLabel="Modal-Publicacion"
        className="Modal-P visible"
    >
        <div className="modal-content">
            <div className="modal-body">

                <div className='btn-c'>
                    <button className="editBtn" onClick={editInfo}>Editar</button>
                    <button className="btnCancel" onClick={closeModal}></button>
                </div>

                <div className='social-content'>
                    {formInfo.social == "facebook" ? <Facebook formInfo={formInfo}/> : <Facebook formInfo={formInfo}/>}
                    {formInfo.social == "instagram" ? <Instagram formInfo={formInfo}/> : ""}
                </div>
                

                <form className="formulario-verificacion">
                    <hr/>
                    <div className="area-content">
                        <textarea className="area-description" name="textarea" rows="4" placeholder="Agrega comentario del post"></textarea>
                    </div>
                    <div className="btn-content">
                        <button className="btnCorr" name="corregir" value="true">Enviar correciones</button>
                        <button type="submit" className="btnAccept" name="enviar" value="true">Aprobar</button>
                    </div>
                </form>
            </div>
        </div>
    </Modal>
        
    );
}