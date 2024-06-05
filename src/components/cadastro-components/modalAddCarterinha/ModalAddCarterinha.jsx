import React, { useCallback, useState } from "react";
import "./ModalAddCarterinha.css";
import { useDropzone } from "react-dropzone";
import carterinha from "../../../assets/carterinha-exemplo.png";
import upload from "../../../assets/upload.png";

const ModalAddCarterinha = ({ setOpenModal }) => {
    const [file, setFile] = useState();
    const [preview, setPreview] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const currentFile = acceptedFiles[0];
        setFile(currentFile);
        setPreview(URL.createObjectURL(currentFile));
    }, []);

    const dropzone = useDropzone({
        onDrop,
        maxFiles: 1,
        maxSize: 4 * 1024 * 1024,
        accept: {
            "image/png": [".png", ".jpg"],
        },
    });
    return (
        <div
            className="dark-background-modal"
            
        >
            <div className="modal-file-upload">
                <div className="head-modal-file"></div>
                <h2>Instuções para enviar a foto da carteirinha</h2>
                <img className="carterinha-example" src={carterinha} alt="" />
                <h3>Inserir aqui</h3>
                <label
                    htmlFor="imgRgResp"
                    className="input-file-container"
                   
                    {...dropzone.getRootProps()}
                    
                >
                    {file ? (
                        <img src={preview} className="preview-img" alt="" />
                    ) : (
                        <img src={upload} alt="" />
                    )}

                    <input id="imgRgResp" {...dropzone.getInputProps()} />
                </label>

                <div className="container-button-upload-modal">
                    <div onClick={() => setOpenModal(false)}>Continuar</div>
                </div>
                <div className="end-modal-file"></div>
            </div>
        </div>
    );
};
export default ModalAddCarterinha;
