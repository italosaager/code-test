const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Gerencia de clientes! Versão 1.0");
});

module.exports = router;
