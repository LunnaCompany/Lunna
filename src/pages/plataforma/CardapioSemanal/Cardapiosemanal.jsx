import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa6";
import fotomae from "../../../assets/foto-responsavel-mae.png";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { CardeCardapio } from "./CardeCardapio/CardeCardapio";
import "./Cardapiosemanal.css";
import cafe01 from "../../../assets/Comida01.png";
import almoco01 from "../../../assets/almoco01.png";
import tarde01 from "../../../assets/tarde01.png";
import janta01 from "../../../assets/janta01.png";
import cafe02 from "../../../assets/cafe02.png";
import almoco02 from "../../../assets/almoco02.png";
import tarde02 from "../../../assets/tarde02.png";
import janta02 from "../../../assets/janta02.png";
import cafe03 from "../../../assets/cafe03.png";
import almoco03 from "../../../assets/almoco03.png";
import tarde03 from "../../../assets/tarde03.png";
import janta03 from "../../../assets/janta03.png";
import cafe04 from "../../../assets/cafe04.png";
import almoco04 from "../../../assets/almoco04.png";
import tarde04 from "../../../assets/tarde04.png";
import janta04 from "../../../assets/janta04.png";
import cafe05 from "../../../assets/cafe05.png";
import almoco05 from "../../../assets/almoco05.png";
import tarde05 from "../../../assets/tarde05.png";
import janta05 from "../../../assets/janta05.png";
import { AnimatePresence } from "framer-motion";
import axios from "axios";

function CardapioSemanal() {
    const [semana, setSemana] = useState(0);
    const [imagePerfilDisc, setImagePerfilDisc] = useState("");
    const [dataDiscente, setDataDiscente] = useState([]);

    const email = localStorage.getItem("email");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `http://localhost:8080/responsavel/email/${email}`
            );
            await fetchPerfilDisc(
                encodeURIComponent(response.data.ftPerfilResp)
            );

            setDataDiscente(response.data);
            setNomeFilho(response.data.discentes[0].nomeDisc);
        };

        const fetchPerfilDisc = async (image) => {
            const response = await axios.get(
                `http://localhost:8080/images?filename=${image}`,
                { responseType: "arraybuffer" }
            );

            setImagePerfilDisc(response.data);
        };

        fetchData();
    }, [email]);

    console.log(dataDiscente);

    const getImage = (img) => {
        return URL.createObjectURL(new Blob([img]));
    };

    function nextSemana() {
        if (semana < 4) {
            setSemana(semana + 1);
        }
    }

    function prevSemana() {
        if (semana > 0) {
            setSemana(semana - 1);
        }
    }

    const dataCardapiosemanal = [
        {
            cardapio: [
                {
                    comidaimg: cafe01,
                    turno: "Café da manhã",
                    horario: "07:30h",
                    descricaoComida:
                        "Pão integral com queijo branco, mamão cortado em cubos e leite.",
                    diasemana: "Segunda - Feira",
                    delay: 0.2,
                },

                {
                    comidaimg: almoco01,
                    turno: "Almoço",
                    horario: "10:00h",
                    descricaoComida:
                        "Arroz, feijão, frango grelhado, legumes cozidos (cenoura, brócolis e abobrinha) e suco de laranja natural.",
                    colordescricao: "color-descri-roxo",
                    colorhorario: "color-hora-roxo",
                    delay: 0.25,
                },

                {
                    comidaimg: tarde01,
                    turno: "Café da tarde",
                    horario: "07:30h",
                    descricaoComida:
                        "Pão integral com queijo branco, mamão cortado em cubos e leite.",
                    delay: 0.3,
                },

                {
                    comidaimg: janta01,
                    turno: "Janta",
                    horario: "15:00h",
                    descricaoComida:
                        "Macarrão com molho de tomate e carne moída, salada verde com tomate e pepino.",
                    colordescricao: "color-descri-blue",
                    colorhorario: "color-hora-blue",
                    delay: 0.35,
                },
            ],
        },

        {
            cardapio: [
                {
                    comidaimg: cafe02,
                    turno: "Café da manhã",
                    horario: "07:30h",
                    descricaoComida:
                        "Mingau de aveia com banana amassada, torradas integrais com requeijão e leite.",
                    diasemana: "Terça - Feira",
                    delay: 0.2,
                },

                {
                    comidaimg: almoco02,
                    turno: "Almoço",
                    horario: "10:00h",
                    descricaoComida:
                        "Macarrão integral ao sugo, almôndegas de carne moída, salada de alface e tomate, e suco de uva natural.",
                    colordescricao: "color-descri-roxo",
                    colorhorario: "color-hora-roxo",
                    delay: 0.25,
                },

                {
                    comidaimg: tarde02,
                    turno: "Café da tarde",
                    horario: "07:30h",
                    descricaoComida:
                        "Frutas da estação picadas e iogurte natural.",
                    delay: 0.3,
                },

                {
                    comidaimg: janta02,
                    turno: "Janta",
                    horario: "15:00h",
                    descricaoComida:
                        "Frango assado, purê de batatas, legumes no vapor (cenoura, brócolis, ervilhas).",
                    colordescricao: "color-descri-blue",
                    colorhorario: "color-hora-blue",
                    delay: 0.35,
                },
            ],
        },

        {
            cardapio: [
                {
                    comidaimg: cafe03,
                    turno: "Café da manhã",
                    horario: "07:30h",
                    descricaoComida:
                        "Panqueca de banana com aveia, melancia cortada em pedaços.",
                    diasemana: "Quarta - Feira",
                    delay: 0.2,
                },

                {
                    comidaimg: almoco03,
                    turno: "Almoço",
                    horario: "10:00h",
                    descricaoComida:
                        "Peixe assado, purê de batata, couve refogada, salada de rúcula com beterraba ralada e suco de abacaxi natural. uva natural.",
                    colordescricao: "color-descri-roxo",
                    colorhorario: "color-hora-roxo",
                    delay: 0.25,
                },

                {
                    comidaimg: tarde03,
                    turno: "Café da tarde",
                    horario: "07:30h",
                    descricaoComida:
                        "Suco de morango é uma bebida refrescante e nutritiva, com sabor doce e ácido, rica em vitamina C e antioxidantes.",
                    delay: 0.3,
                },

                {
                    comidaimg: janta03,
                    turno: "Janta",
                    horario: "15:00h",
                    descricaoComida:
                        "Gelatina é uma sobremesa feita a partir de agar-agar, um agente gelificante natural derivado de algas, com uma textura firme e suave, frequentemente utilizada em preparações vegetarianas.",
                    colordescricao: "color-descri-blue",
                    colorhorario: "color-hora-blue",
                    delay: 0.35,
                },
            ],
        },

        {
            cardapio: [
                {
                    comidaimg: cafe04,
                    turno: "Café da manhã",
                    horario: "07:30h",
                    descricaoComida:
                        "Cuscuz com leite, pera cortada em pedaços.",
                    diasemana: "Quinta - Feira",
                    delay: 0.2,
                },

                {
                    comidaimg: almoco04,
                    turno: "Almoço",
                    horario: "10:00h",
                    descricaoComida:
                        "Strogonoff de carne, arroz, abobrinha refogada, salada de alface e tomate, e suco de limão natural.",
                    colordescricao: "color-descri-roxo",
                    colorhorario: "color-hora-roxo",
                    delay: 0.25,
                },

                {
                    comidaimg: tarde04,
                    turno: "Café da tarde",
                    horario: "07:30h",
                    descricaoComida: "Pão com requeijão, maça e suco de melão.",
                    delay: 0.3,
                },

                {
                    comidaimg: janta04,
                    turno: "Janta",
                    horario: "15:00h",
                    descricaoComida:
                        "Hambúrguer de carne no pão, batatas assadas, salada de alface, tomate e milho e uvas, morangos.",
                    colordescricao: "color-descri-blue",
                    colorhorario: "color-hora-blue",
                    delay: 0.35,
                },
            ],
        },

        {
            cardapio: [
                {
                    comidaimg: cafe05,
                    turno: "Café da manhã",
                    horario: "07:30h",
                    descricaoComida:
                        "Crepioca de queijo com tomate, maçã cortada em fatias.",
                    diasemana: "Sexta - Feira",
                    delay: 0.2,
                },

                {
                    comidaimg: almoco05,
                    turno: "Almoço",
                    horario: "10:00h",
                    descricaoComida:
                        "Arroz integral, feijão preto, carne moída com legumes, salada de repolho e cenoura ralada, e suco de maracujá natural.",
                    colordescricao: "color-descri-roxo",
                    colorhorario: "color-hora-roxo",
                    delay: 0.25,
                },

                {
                    comidaimg: tarde05,
                    turno: "Café da tarde",
                    horario: "07:30h",
                    descricaoComida:
                        "Cookies de aveia e banana e suco de manga.",
                    delay: 0.3,
                },

                {
                    comidaimg: janta05,
                    turno: "Janta",
                    horario: "15:00h",
                    descricaoComida:
                        "Almôndegas de carne ao molho de tomate, purê de abóbora e milho cozido.",
                    colordescricao: "color-descri-blue",
                    colorhorario: "color-hora-blue",
                    delay: 0.35,
                },
            ],
        },
    ];

    return (
        <div className="container-cardapio-semanal">
            <div className="section-agenda">
                <div className="agenda-cardapio-semanal">
                    <h2>Meu Cardápio</h2>
                    <div className="sino-container-cardapio-semanal">
                        <div className="sino-cardapio-semanal-section">
                            <FaBell size={15} />
                        </div>
                        <div className="foto-mae-cardapio-semanal">
                            <img src={getImage(imagePerfilDisc)} alt="" />
                            <h3>{dataDiscente.nomeResp}</h3>
                        </div>
                    </div>
                </div>
                <div className="date-agenda">
                    <h2>
                        {" "}
                        {
                            dataCardapiosemanal[semana].cardapio[0].diasemana
                        } | <span> 27/05 à 31/05 </span>{" "}
                    </h2>
                    <div className="btn-tudo">
                        <div className="btn-esqu" onClick={prevSemana}>
                            <IoIosArrowBack size="20px" />
                        </div>{" "}
                        <div className="btn-dir" onClick={nextSemana}>
                            <IoChevronForward size="20px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-section-card-cardapio">
                <AnimatePresence>
                    {dataCardapiosemanal[semana].cardapio.map(
                        (cardCardapio) => (
                            <CardeCardapio dados={cardCardapio} />
                        )
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default CardapioSemanal;
