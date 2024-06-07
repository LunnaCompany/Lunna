
import "./Card-foto.css"
import { CiHeart } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { useState } from "react";
import Boxmemoria from "../../lightbox/boxmemoria";
export function Cardfoto({ dados }) {
    
    const [open, setOpen] = useState (false);
    function handleOpen ()
    {
        setOpen (!open);
    }
    return (
        <div>
            <div className="section-memoria">
                    <div className="imagem-pro">
                        <img src={dados.fotopedagogo} alt="" />
                    </div>

                    <div className="data-memorias">

                        <div className="section-data">
                            <h4>{dados.nome}</h4>
                            <div className="data">
                                <CiCalendarDate size="20px" />
                                <p>{dados.date}</p>
                            </div>
                        </div>
                        <div className="container-img">
                            <div className="img">
                                <img onClick={handleOpen} src={dados.memoria} alt="" />
                            </div>
                            <div className="container-btn-fav">
                                <div className="btn">
                                    <button> <CiHeart size="20px" color="black"/> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    open && (
                        <Boxmemoria  onClick={handleOpen} />
                    )
                }
        </div>
    )

}