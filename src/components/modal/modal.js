import React from 'react';
import Modal from 'react-modal';
import './modal.css';

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

    function openModal (){
        setIsOpen(true);
    }

    function afterOpenModal(){
        const fechaActual = new Date();
        const dia = fechaActual.getDay();
        const mes = fechaActual.getMonth() + 1;
        const anio = fechaActual.getFullYear();

        const dateInp = document.getElementById("date");
        dateInp.value = dia+"/"+mes+"/"+anio;
    }

    function closeModal() {
        setIsOpen(false);
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
                            
                        <a  className="btn btn-sm btn-create btn-create2 btn-new" onClick={openModal}>Crear publicación</a>
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
                    <form>
                        <div className="select-content">
                            <label className="form-title">Seleccionar empresa:</label>
                            <select className="form-select">
                                <option value=""disabled>Seleccione una opción</option>
                            </select>
                        </div>
                        <div className="date-content">
                            <label className="form-title">Seleccionar fecha del post:</label>
                            <input className="date-input" id="date" type="datetime-local"/>
                        </div>
                        <div className="description-content">
                            <label className="form-title">Agregar descripción:</label>
                            <textarea className="area-description" name="textarea" rows="6" placeholder="Agrega la descripción del post"></textarea>
                        </div>
                        <div className="galery-content">
                            <label className="form-title">Agregar imágen(es):</label>
                            <div className="galery-img"></div>
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




