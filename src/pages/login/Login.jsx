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
function Login() {
    const [token, setToken] = useState("");
    const [errorResponse, setErrorResponse] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const handleToken = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

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
            <div className="container-login">
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
                                Não tem uma conta? /<span>Cadastre-se</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;
