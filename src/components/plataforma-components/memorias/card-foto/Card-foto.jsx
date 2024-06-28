import "./Card-foto.css";
import { CiHeart } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { useState } from "react";
import Boxmemoria from "../../lightbox/boxmemoria";
import { FaHeart } from "react-icons/fa";
export function Cardfoto({ dados }) {
    const [open, setOpen] = useState(false);
    const [favoritar, setFavoritar] = useState(true);

    function handleOpen() {
        setOpen(!open);
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
                            <img
                                onClick={handleOpen}
                                src={dados.memoria}
                                alt=""
                            />
                        </div>
                        <div className="container-btn-fav">
                            <div className="btn">
                                <button
                                    onClick={() => setFavoritar(!favoritar)}
                                >
                                    {favoritar ? (
                                        <FaHeart size="20px" color="grey" />
                                    ) : (
                                        <FaHeart size="20px" color="red" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {open && <Boxmemoria handleOpen={handleOpen} />}
        </div>
    );
}
