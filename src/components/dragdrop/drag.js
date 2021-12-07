import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './drag.css';

import { ImageConfig } from '../../config/ImageConfig'; 
import uploadImg from '../../assets/images/cloud-upload-regular-240.png';

export const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);
    const [urlList, setUrlList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];

        if (newFile) {
            
            const updatedList = [...fileList, newFile];
            
            setFileList(updatedList);

            let reader = new FileReader();

            reader.onload = e =>{
                const url = e.target.result;

                const updateURList = [...urlList, url];
                setUrlList(updateURList);
                props.onFileChange(updatedList, updateURList);
            }

            reader.readAsDataURL(newFile);

        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        const updatedURList = [...urlList];
        updatedList.splice(fileList.indexOf(file), 1);
        updatedURList.splice(urlList.indexOf(file), 1);
        setFileList(updatedList);
        setUrlList(updatedURList);
        props.onFileChange(updatedList, updatedURList);
    }

    return (
        <>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt="" />
                    <p>
                        Arrastra y suelta tus imágenes aquí
                    </p>
                </div>
                <input type="file" value="" onChange={onFileDrop} name="files[]"/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Listo para subir
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

