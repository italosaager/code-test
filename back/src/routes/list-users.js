const express = require("express");
const router = express.Router();
const pool = require("../configs/database");

router.get("/list-users", async (req, res) => {

  const listUsers = `
    SELECT * FROM tb_cliente
  `;

  try {
    const result = await pool.query(listUsers);
    
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar usuários: ', error);
    res.status(500).send("Erro ao buscar usuário no banco de dados");
  }
});

module.exports = router;
