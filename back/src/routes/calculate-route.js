const express = require("express");
const router = express.Router();
const pool = require("../configs/database");
const calculateRoute = require("../configs/route-calculator");

router.get("/calculate-route", async (req, res) => {
  try {
    const result = await pool.query("SELECT nome, eixo_x, eixo_y FROM tb_cliente");
    let clients = result.rows;

    clients.unshift({ nome: 'Empresa', eixo_x: 0, eixo_y: 0 });

    const route = calculateRoute(clients);

    res.status(200).json(route);
  } catch (error) {
    console.error('Erro ao calcular a rota: ', error);
    res.status(500).send("Erro ao calcular a rota");
  }
});

module.exports = router;
