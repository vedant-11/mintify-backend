const mongoose = require("mongoose");
const WalletAddressSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  walletAddress: { type: String, required: true },
});

module.exports = mongoose.model("WalletAddress", WalletAddressSchema);
