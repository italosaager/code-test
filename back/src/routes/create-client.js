const express = require("express");
const router = express.Router();
const pool = require("../configs/database");

router.post("/create-client", async (req, res) => {
  const newClient = req.body;

  const createClient = `
  INSERT INTO tb_cliente (nome, email, telefone, eixo_x, eixo_y)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  `;

  try {
    const { rows } = await pool.query(createClient, [
      newClient.nome,
      newClient.email,
      newClient.telefone,
      newClient.eixo_x,
      newClient.eixo_y
    ]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).send("Erro ao cadastrar usuário no banco de dados");
  }
});

module.exports = router;
