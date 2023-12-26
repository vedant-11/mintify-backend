const {
  getWalletAddress,
  postWalletAddress,
} = require("../controllers/walletController");

const router = require("express").Router();

router.get("/", getWalletAddress);
router.post("/", postWalletAddress);

module.exports = router;
