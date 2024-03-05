import React, { useState } from "react";
import "./cadastrar.css";
import { service } from "../../services";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [eixoX, setEixoX] = useState("");
  const [eixoY, setEixoY] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    setNome("");
    setEmail("");
    setTelefone("");
    setEixoX("");
    setEixoY("");
    try {
        await service.createClient(nome, email, telefone, eixoX, eixoY);
        alert("Usuário cadastrado!");
      } catch (error) {
        console.log(error);
        alert("Ocorreu um erro!");
      }
  };

  return (
    <div className="container-cadastro">
      <h2>Cadastrar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Coordenada x:</label>
          <input
            type="number"
            value={eixoX}
            onChange={(e) => setEixoX(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Coordenada y:</label>
          <input
            type="number"
            value={eixoY}
            onChange={(e) => setEixoY(e.target.value)}
            required
          />
        </div>
        <button
          disabled={!nome || !email || !telefone || !eixoX || !eixoY}
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
