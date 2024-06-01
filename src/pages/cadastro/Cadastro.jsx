import React, { useState } from "react";
import lunnaLogo from "../../assets/lunna-logo.png";
import "./Cadastro.css";
import StepControll from "../../components/stepControll/StepControll";
import ResponavelCadastro from "../../components/responsavelCadastro/ResponavelCadastro";
import CriancaCadastro from "../../components/criancaCadastro/CriancaCadastro";
import MedicamentoCadastro from "../../components/medicamentoCadastro/MedicamentoCadastro";
import { useForm } from "react-hook-form";
import axios from "axios";

const Cadastro = () => {
    const [imgResp, setImgResp] = useState();
    const [step, setStep] = useState(1);
    const [errorResponse, setErrorResponse] = useState();

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

        console.log(step);
    };

    const handlePrevStep = () => {
        if ((step > 1) & (step <= 3)) {
            setStep(step - 1);
        }
        console.log(step);
    };

    const handleInputFile = (e) => {
        const file = e.target.files[0];
        console.log("img " + file);
        setImgResp(file);
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
        formData.append("ftPerfilResp", imgResp);
        formData.append("ftRgResp", imgResp);

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

        const dataCrianca = {
            cpfDisc: data.cpfCrianca,
            nomeDisc: data.nomeFilho,
            dataNasDisc: dataNascimento,
            alturaDisc: data.altura,
            pesoDisc: data.peso,
            imgDisc: "base64ImagemPerfil",
            fichaMed: dataFicha,
        };

        formData.append("body", JSON.stringify(dataCrianca));
        formData.append("imgDisc", imgResp);
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
                    await postNewFicha(data);
                }
            }
        }
        console.log(errorResponse);
        handleNextStep();
    };

    return (
        <section className="page-cadastro-lunna">
            <img className="lunna-logo" src={lunnaLogo} alt="" />
            <StepControll step={step} />
            {step === 1 ? (
                <ResponavelCadastro
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    watch={watch}
                    handleInputFile={handleInputFile}
                />
            ) : step === 2 ? (
                <CriancaCadastro register={register} errors={errors} />
            ) : (
                <MedicamentoCadastro register={register} errors={errors} />
            )}

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
        </section>
    );
};

export default Cadastro;
