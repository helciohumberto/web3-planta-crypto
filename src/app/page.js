"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { doLogin } from "@/services/Web3Service";

export default function Home() {
  const {push} = useRouter();

  const [message, setMessage] = useState("");

  function btnLoginClick(){
    setMessage("Conectando na carteira...aguarde...");
    doLogin()
      .then(account => push("/create"))
      .catch(err => {
        console.error(err);
        setMessage(err.message)
      })
  }
  return (
    <>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-6">
            <img src="/slogan.png" className="d-block mx-lg-auto img-fluid" width={400}/>
          </div>
          <div className="col-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Planta Crypto</h1>
            <p className="lead">PlantaCrypto é uma plataforma de doações descentralizadas que conecta quem quer ajudar com quem planta o futuro. Usando tecnologia blockchain e criptomoedas, o projeto facilita doações diretas e transparentes para pequenos agricultores, iniciativas agroecológicas e projetos rurais sustentáveis.
<br/> <br/>
A proposta é unir inovação e solidariedade, tornando o ato de doar mais acessível, seguro e global, ao mesmo tempo em que promove o desenvolvimento agrícola com impacto social.</p>
            <p className="lead">Autentique-se com sua carteira e crie sua campanha. </p>
            <p className="lead mb-3">Para doações, use o link da campanha já existente.</p>
            <div className="d-flex justify-content-start mt-5">
              <button type="button" className="btn btn-primary btn-lg px-4 me-2 col-12" onClick={btnLoginClick}>
                <img src="/metamask.png" width={64} className="me-2"/>
                Conectar com a MetaMask
              </button>
            </div>
            {
              message
              ? <div className="alert alert-success p-3 col-12 mt-3" role="alert">{message}</div>
              : <></>
            }
          </div>
        </div>
      </div>
    </>
  );
}
