import { useState, useEffect, useRef } from "react";
import "./TelaDePagamentoLunna.css";
import LogoLunnaPay from "./img/LogoLunna.png";
import { FaChevronLeft } from "react-icons/fa";
import PagamentoFinalizado from "./PagamentoFinalizado/PagamentoFinalizado";
import { Link } from "react-router-dom";

function TelaPagamento() {
    const [paid, setPaid] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [namePlan, setNamePlan] = useState("");
    const [precoPlan, setPrecoPlan] = useState("");
    let paypalRef = useRef();

    useEffect(() => {
        const nomePlano = localStorage.getItem("plan");
        const precoPlano = localStorage.getItem("preco");
        setNamePlan(nomePlano);
        setPrecoPlan(precoPlano);
    }, []);

    const produtos = {
        preco: precoPlan,
        descricao: namePlan,
        descricao2: "Economize com o nosso plano semestral",
    };

    useEffect(() => {
        const script = document.createElement("script");
        const id =
            "AYYsnsTm3jnZlMir8Z3qr_WkWdNpIPHxD_jO9NhTUDkK6yf7fXYzC0-iLsUEWSftdzFfwbZ6tS_F_VKJ";
        script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;

        script.addEventListener("load", () => setLoaded(true));

        document.body.appendChild(script);

        if (loaded) {
            function operadorLogicoPagamento() {
                setTimeout(() => {
                    window.paypal
                        .Buttons({
                            createOrder: (data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            description: produtos.descricao,
                                            amount: {
                                                currency_code: "BRL",
                                                value: produtos.preco,
                                            },
                                        },
                                    ],
                                });
                            },
                            onApprove: async (_, actions) => {
                                const order = await actions.order.capture();

                                setPaid(true);

                                console.log(order);
                            },
                        })
                        .render(paypalRef);
                });
            }
            operadorLogicoPagamento();
        }
    });

    return (
        <>
            {paid ? (
                <div>
                    <PagamentoFinalizado />
                </div>
            ) : (
                <div className="TelaDePagamento">
                    <div className="Tela-precos-lunna">
                        <div className="tela-precos-icon">
                            <Link to="/Lunna-landing-page">
                                <FaChevronLeft
                                    className="FaChevronLeft"
                                    size={40}
                                    color="white"
                                />
                            </Link>
                        </div>
                        <div className="Tela-precos-lunna-1">
                            <h1>
                                {produtos.descricao} por{" "}
                                <span>R$ {produtos.preco}</span>
                            </h1>
                            <p>{produtos.descricao2}</p>
                        </div>
                    </div>

                    <div
                        className="botoes-paypal-padrao"
                        ref={(v) => (paypalRef = v)}
                    />
                </div>
            )}
        </>
    );
}

export default TelaPagamento;
