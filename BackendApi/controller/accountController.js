const UserModel = require('../models/AccountShema');

let AccountController = { 
    find: async (req, res) => {
        let found = await UserModel.findOne({name: req.params.username});
        res.json(found);
    },
    all: async (req, res) => {
        let allUsers = await UserModel.find()
        res.json(allUsers);
    },
    create: async (req, res) => {
        let newUser = new UserModel(req.body);
        let savedUser = await newUser.save();
        res.json(savedUser);
    },
    getAllInvestments: async (req, res) => {
        let foundUser = await UserModel.find({name: req.params.username}).populate("Account");
        res.json(foundUser);
    }
}

module.exports = AccountController;