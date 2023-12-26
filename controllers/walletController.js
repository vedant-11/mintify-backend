const mongoose = require("mongoose");
const WalletAddress = require("../modal/walletAddressSchema");

exports.getWalletAddress = (req, res) => {
  WalletAddress.find()
    .exec()
    .then((walletAddress) => {
      res.status(200).json(walletAddress);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.postWalletAddress = (req, res) => {
  const walletAddress = new WalletAddress({
    _id: new mongoose.Types.ObjectId(),
    walletAddress: req.body.walletAddress,
  });
  walletAddress
    .save()
    .then((walletAddress) => {
      res.status(200).json(walletAddress);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};
