import React from 'react';
import Modal from 'react-modal';

import "./modal-post.css"
import {Owldemo1} from '../carousel/carousel'


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
      width: '600px',
      height: "610px",
      position: 'absolute',
      top: '10px',
      left: '365px',
      border: '1px solid #ccc',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
    }
 }


export const ModalPost = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal (){
        setIsOpen(true);
    }

    function afterOpenModal(){
        
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <input type="button" onClick={openModal} value="Mostrar"/>
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
                    <div className="info-brand">
                        <div className="logo-brand"></div>
                        <div className="text-brand">
                            <h4 className="user-brand">User Brand</h4>
                            <span className="date-brand-post" id="date-post">09 de noviembre a las 12:15</span>
                        </div>
                    </div>
                    <p className="description-content">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    </p>
                    <Owldemo1 />
                    <form className="formulario-verificacion">
                        <div className="area-content">
                            <textarea className="area-description" name="textarea" rows="4" placeholder="Agrega comentario del post"></textarea>
                        </div>
                        <div className="btn-content">
                            <button className="btnCan" onClick={closeModal}>Cancelar</button>
                            <button className="btnCorr" name="corregir" value="true">Enviar correciones</button>
                            <button type="submit" className="btnAccept" name="enviar" value="true">Aceptar</button>
                        </div>
                    </form>
                </div>
            </div>
            </Modal>
        </div>
        
    );
}