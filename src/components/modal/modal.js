import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import './modal.css';

 const style = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
 }


export const Modl = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal (){
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
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
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={style}
                contentLabel="Example Modal"
            >
            <div className="modal-content">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
                </form>
            </div>
            </Modal>
        </div>
    );
}




