import "./Login.css";
import Input from "../../components/login-componentes/Input/Input";
import Icon from "../../components/login-componentes/Input/img/icon.png";
import Button from "../../components/login-componentes/Button/Button";
import Lunna_logo from "../../assets/lunna-logo.png";
import Baby from "../../components/login-componentes/Baby/Baby";
import Icon1 from "../../assets/lock.png";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login() {
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [errorResponse, setErrorResponse] = useState(false);
    const navigate = useNavigate();

    const scrollToPage = (page, elementId) => {
        navigate(page);

        setTimeout(() => {
            scroller.scrollTo(elementId, {
                duration: 800,
                smooth: true,
                offset: -50,
            });
        }, 10);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleToken = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const handleUserEmail = (email) =>{
        localStorage.setItem("email", email);
        sessionStorage.setItem("email", email)
        setEmail(token);
    }

    const handleLogin = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/responsavel/login-responsavel",
                {
                    email: data.emailLogin,
                    senha: data.senhalLogin,
                }
            );
            console.log(response.data);
            handleToken(response.data.token);
            handleUserEmail(data.emailLogin);
            setErrorResponse(false);
        } catch (error) {
            if (error.response.status === 400) {
                setErrorResponse(true);
            }
        }
    };

    const onSubmit = async (data) => {
        console.log(data);
        handleLogin(data);
    };

    console.log(errorResponse);

    return (
        <main className="page-login">
            <div id="login" className="container-login">
                <Baby />
                <div className="content-login">
                    <div className="divImg">
                        <img src={Lunna_logo} />
                    </div>
                    <div className="container">
                        <h1>Entre com a sua conta</h1>
                        <div className="input">
                            <div className="input-email-login">
                                <img src={Icon} alt="" />
                                <input
                                    type="email"
                                    placeholder={"email"}
                                    {...register("emailLogin", {
                                        required: true,
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        },
                                    })}
                                ></input>
                            </div>
                            <div className="container-error-login">
                                {errors?.emailLogin?.type === "required" && (
                                    <p className="error-message-input">
                                        O email é obrigatorio
                                    </p>
                                )}
                                {errors?.emailLogin?.type === "pattern" && (
                                    <p className="error-message-input">
                                        Email invalido
                                    </p>
                                )}
                                {errorResponse && (
                                    <p className="error-message-input">
                                        Usuario ou senha invalido
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="senha">
                            <div className="input input-senha-login">
                                <div className="input-email-login">
                                    <input
                                        type="email"
                                        placeholder={"senha"}
                                        {...register("senhalLogin", {
                                            required: true,
                                            minLength: 8,
                                        })}
                                    ></input>
                                    <img src={Icon1} alt="" />
                                </div>
                                <div className="container-error-login">
                                    {errors?.senhalLogin?.type ===
                                        "required" && (
                                        <p className="error-message-input">
                                            A senha é obrigatoria
                                        </p>
                                    )}
                                    {errors?.senhalLogin?.type ===
                                        "minLength" && (
                                        <p className="error-message-input">
                                            O minimo e caracteres é 8
                                        </p>
                                    )}
                                </div>
                            </div>
                            <p className="span-esqueceu-senha">
                                Esqueceu a senha? /<span>Recupere aqui</span>
                            </p>
                        </div>
                        <div className="login">
                            <Button
                                nomeBtn="Login"
                                onSubmit={onSubmit}
                                handleSubmit={handleSubmit}
                            />
                            <p>
                                Não tem uma conta? /
                                <span
                                    onClick={() =>
                                        scrollToPage(
                                            "/Lunna-landing-page/cadastro",
                                            "cadastro"
                                        )
                                    }
                                >
                                    Cadastre-se
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
