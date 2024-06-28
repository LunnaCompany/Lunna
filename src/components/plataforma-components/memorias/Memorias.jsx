import React from 'react'
import "./Memorias.css"
import { BiSolidHeartCircle } from "react-icons/bi";
import pro1 from "../../../assets/fotopedagogo.png"
import memoria1 from "../../../assets/memoria1.png"
import { Cardfoto } from "./card-foto/Card-foto"
import memoria2 from "../../../assets/memoria2.png"
import memoria3 from "../../../assets/memoria3.png"
import memoria4 from "../../../assets/memoria4.png"
import pro2 from "../../../assets/pro2.png"
import pro3 from "../../../assets/pro3.png"
import pro4 from "../../../assets/pro4.png"
import pro5 from "../../../assets/pro5.png"
import Checkbox from '@mui/material/Checkbox';

function Memorias() {
    const dataCardfoto = [

        {
            fotopedagogo: pro1,
            nome: "Profª Marta",
            date: "20/08",
            memoria: memoria1,

        },

        {
            fotopedagogo: pro2,
            nome: "Profª Rute",
            date: "25/08",
            memoria: memoria2,
        },


        {
            fotopedagogo: pro3,
            nome: "Profª Rosangela",
            date: "26/08",
            memoria: memoria3,
        },

        {
            fotopedagogo: pro4,
            nome: "Profª Paula",
            date: "27/08",
            memoria: memoria4,
        },

        {
            fotopedagogo: pro5,
            nome: "Profª Maria",
            date: "01/09",
            memoria: memoria2,
        },


        {
            fotopedagogo: pro1,
            nome: "Profª Larissa",
            date: "10/09",
            memoria: memoria1,
        },

     
    ]
    return (
        <div>
            <div className="tudo-memoria">
                <div className="container-filtro">
                    <div className="fitro-section">
                        <h2>Filtrar</h2>
                        <div className="data-filtrar-chevron-memorias">
                        <p>Data</p>
                        <Checkbox defaultChecked />
                        </div>
                    </div>
                    <div className="btn-section">
                        <button className='btn-favoritos' >Favoritos<BiSolidHeartCircle size="25px" color="#fff" /> </button>
                    </div>
                </div>
                <div className="container-memoria">
                    {
                        dataCardfoto.map((cardfoto) => (
                            <Cardfoto dados={cardfoto} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Memorias;