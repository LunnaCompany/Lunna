import React, { useEffect, useState } from "react";
import lunnaLogo from "../../assets/lunna-logo.png";
import "./Cadastro.css";
import StepControll from "../../components/cadastro-components/stepControll/StepControll";
import ResponavelCadastro from "../../components/cadastro-components/responsavelCadastro/ResponavelCadastro";
import CriancaCadastro from "../../components/cadastro-components/criancaCadastro/CriancaCadastro";
import MedicamentoCadastro from "../../components/cadastro-components/medicamentoCadastro/MedicamentoCadastro";
import { useForm } from "react-hook-form";
import axios from "axios";
import { CardCadastroSucess } from "../../components/cadastro-components/cardCadastroSucess/CardCadastroSucess";

const Cadastro = () => {
    const [imgResp, setImgResp] = useState();
    const [imgRgResp, setimgRgResp] = useState(null);
    const [step, setStep] = useState(1);
    const [errorResponse, setErrorResponse] = useState(null);
    const [cpfResponsavel, setCpfResponsavel] = useState(null);
    const [cpfDiscente, setCpfDiscente] = useState(null);
    const [emailResponsavel, setEmailResponsavel] = useState(null);
    const [sucess, setSucess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const handleNextStep = () => {
        if ((step >= 1) & (step < 3)) {
            setStep(step + 1);
        }
    };

    const handlePrevStep = () => {
        if ((step > 1) & (step <= 3)) {
            setStep(step - 1);
            setCpfResponsavel(null);
            setCpfDiscente(null);
        }
    };

    console.log(sucess);

    const handleInputFile = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImgResp(file);
    };

    const findResponsavelByCpf = async (cpf) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/responsavel/cpf/${cpf}`
            );
            setCpfResponsavel(response.data.cpfResp);
            return true;
        } catch (error) {
            if (error.response.status === 404) {
                setCpfResponsavel(null);
                return false;
            }
        }
    };
    const findResponsavelByEmail = async (email) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/responsavel/email/${email}`
            );
            setEmailResponsavel(response.data.cpfResp);
            return true;
        } catch (error) {
            if (error.response.status === 404) {
                setEmailResponsavel(null);
                console.log(errorResponse);
                return false;
            }
        }
    };

    const findCriancaByCpf = async (cpf) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/discente/cpf/${cpf}`
            );
            setCpfDiscente(response.data.cpfDisc);
            console.log(cpfDiscente);
            return true;
        } catch (error) {
            if (error.response.status === 404) {
                setCpfDiscente(null);
                console.log(error);
                return false;
            }
        }
    };

    const postNewResponsavel = async (data) => {
        const formData = new FormData();
        const dataResp = {
            nomeResp: data.nome,
            cpfResp: data.cpf,
            rgResp: data.rg,
            emailResp: data.email,
            emailRecResp: data.emailSecundario,
            senha: data.senha,
            ftRgResp: "base64ImagemPerfil",
            ftPerfilResp: "base64ImagemPerfil",
            contato: {
                numeroTel: data.telefone,
                numeroCel: data.celular,
            },
            enderecoResp: {
                rua: data.rua,
                bairro: data.bairro,
                cep: data.cep,
                uf: data.uf,
            },
        };

        formData.append("body", JSON.stringify(dataResp));
        formData.append("ftPerfilResp", data.imgPerfil[0]);
        formData.append("ftRgResp", data.imgPerfil[0]);

        try {
            const response = await axios.post(
                "http://localhost:8080/responsavel",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Funciono " + JSON.stringify(response.data, null, 2));
            return true;
        } catch (error) {
            handleError(error);
            return false;
        }
    };

    const postNewCrianca = async (data) => {
        const formData = new FormData();
        const dataNascimento = `${data.ano}-${data.mes}-${data.dia}`;
        const cepHospital = `${data.cep}-${data.hospitalDigito}`;
        const dataFicha = {
            endereco: {
                nomeHospital: data.nomeHospital,
                cep: cepHospital,
                rua: data.ruaHospital,
                uf: data.ufHospital,
            },
            planSaud: data.namePlano,
            cuidados: data.cuidados,
            numCartSus: data.sus,
            remedios: data.descMedicamentos,
            comidasAlergicas: data.descComidas,
            descTratamento: data.descTratamento,
            qtdHoraMed: data.horasMed,
            qtdMed: data.quantidadeMed,
        };

        const dataContato = {
            nome: data.nomeContato,
            numeroTelefone: data.telefoneContato,
            numeroCelular: data.celularContato,
            parentesco: data.parentesco,
        };

        const dataCrianca = {
            cpfDisc: data.cpfCrianca,
            nomeDisc: data.nomeFilho,
            dataNasDisc: dataNascimento,
            alturaDisc: data.altura,
            pesoDisc: data.peso,
            imgDisc: "base64ImagemPerfil",
            deficiencia: data.deficiencia,
            fichaMed: dataFicha,
            contatoEmergencia: dataContato,
        };

        formData.append("body", JSON.stringify(dataCrianca));
        formData.append("imgDisc", data.imgPerfil[0]);
        formData.append("cpfResp", data.cpf);

        try {
            const response = await axios.post(
                "http://localhost:8080/discente",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Funciono " + JSON.stringify(response.data, null, 2));
            return true;
        } catch (error) {
            handleError(error);
            return false;
        }
    };

    const postNewFicha = async (data) => {
        const cepHospital = `${data.cep}-${data.hospitalDigito}`;
        const dataFicha = {
            endereco: {
                nomeHospital: data.nomeHospital,
                cep: cepHospital,
                rua: data.ruaHospital,
                uf: data.ufHospital,
            },
            planSaud: data.namePlano,
            cuidados: data.cuidados,
            numCartSus: data.sus,
            remedios: data.descMedicamentos,
            comidasAlergicas: data.descComidas,
            descTratamento: data.descTratamento,
            qtdHoraMed: data.horasMed,
            qtdMed: data.quantidadeMed,
        };

        console.log("Data Ficha:", dataFicha);

        try {
            const response = await axios.post(
                "http://localhost:8080/ficha-med",
                dataFicha,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Funciono " + JSON.stringify(response.data, null, 2));
            return true;
        } catch (error) {
            handleError(error);
            return false;
        }
    };

    const postNewConatoEmergencia = async (data) => {
        const dataContato = {
            nome: data.nomeContato,
            numeroTelefone: data.telefoneContato,
            numeroCelular: data.celularContato,
            parentesco: data.parentesco,
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/contato-emergencia",
                dataContato,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Funciono " + JSON.stringify(response.data, null, 2));
            return true;
        } catch (error) {
            handleError(error);
            return false;
        }
    };

    const handleError = (error) => {
        if (error.response && error.response.data) {
            setErrorResponse(error.response.data);
        } else {
            setErrorResponse(error.message);
        }
    };

    const onSubmit = async (data) => {
        console.log(data);

        if (step === 3) {
            const responsavelSuccess = await postNewResponsavel(data);
            if (responsavelSuccess) {
                const criancaSuccess = await postNewCrianca(data);
                if (criancaSuccess) {
                    const contatoSuccess = await postNewFicha(data);
                    if (contatoSuccess) {
                        await postNewConatoEmergencia(data);
                        setSucess(true);
                        setStep(step + 1);
                    }
                }
            }
        }

        if (step === 1) {
            const cpf = await findResponsavelByCpf(data.cpf);
            if (!cpf) {
                if (cpfResponsavel === null) {
                    const email = await findResponsavelByEmail(data.email);
                    if (!email) {
                        if (emailResponsavel === null) {
                            handleNextStep();
                        }
                    }
                }
            }
        }

        if (step === 2) {
            const cpf = await findCriancaByCpf(data.cpfCrianca);
            if (!cpf) {
                if (cpfDiscente === null) {
                    handleNextStep();
                }
            }
        }
    };

    return (
        <section className={`page-cadastro-lunna ${sucess && "page-cadastro-sucess"}`}>

            <img className="lunna-logo" src={lunnaLogo} alt="" />
            <StepControll step={step} />
            {step === 1 ? (
                <ResponavelCadastro
                    cpfResponsavel={cpfResponsavel}
                    emailResponsavel={emailResponsavel}
                    register={register}
                    imgRgResp={imgRgResp}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    watch={watch}
                    handleInputFile={handleInputFile}
                    setimgRgResp={setimgRgResp}
                />
            ) : step === 2 ? (
                <CriancaCadastro
                    cpfDiscente={cpfDiscente}
                    register={register}
                    errors={errors}
                />
            ) : step === 3 ? (
                <MedicamentoCadastro register={register} errors={errors} />
            ) : (
                sucess && <CardCadastroSucess />
            )}

            {step !== 4 && (
                <div className="container-button-cadastro">
                    <div className="voltar-btn" onClick={handlePrevStep}>
                        Voltar
                    </div>
                    <div
                        className="continuar-btn"
                        onClick={() => {
                            handleNextStep, handleSubmit(onSubmit)();
                        }}
                    >
                        Próximo
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cadastro;
