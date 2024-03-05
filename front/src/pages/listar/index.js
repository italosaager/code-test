import React, { useState, useEffect } from "react";
import "./listar.css";
import { service } from "../../services";
import Modal from "../../components/modal";

export default function Listar() {
  const [filtro, setFiltro] = useState("");
  const [clientes, setClientes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rota, setRota] = useState([]);

  const handleFiltro = (event) => {
    setFiltro(event.target.value.toLowerCase());
  };

  const filteredClients = clientes.filter(
    (cliente) =>
      cliente.nome.toLowerCase().includes(filtro) ||
      cliente.email.toLowerCase().includes(filtro) ||
      cliente.telefone.includes(filtro)
  );

  useEffect(() => {
    async function getClientes() {
      try {
        const result = await service.getClients();
        setClientes(result);
      } catch (error) {
        console.error(error);
        alert("Erro ao buscar clientes!")
      }
    }
    getClientes();
  }, []);

  const handleCalculateRoute = () => {
    setIsModalOpen(true);
    service.calculateRoute() 
      .then(setRota)
      .catch(error => {
        console.error('Erro ao calcular a rota: ', error);
        alert('Erro ao calcular a rota');
      });
  };

  return (
    <div className="container-clientes">
      <h2>Listagem de Clientes</h2>
      <button onClick={handleCalculateRoute}>Calcular melhor rota</button>
      <input className="pesquisar" type="text" placeholder="Pesquisar" onChange={handleFiltro}value={filtro} />
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Coordenada x</th>
            <th>Coordenada y</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.eixo_x}</td>
              <td>{cliente.eixo_y}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Rota calculada</h2>
        <ul>
          {rota.map((cliente, index) => (
            <li key={index}>{cliente.nome} - X: {cliente.eixo_x}, Y: {cliente.eixo_y}</li>
          ))}
        </ul>
      </Modal>

      </div>

    </div>
  );
}
