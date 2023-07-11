const User = require('../models/user')

module.exports = {
    async index(req, res){
        try {
            const users = await User.find({});
            res.status(200).send(users)

        } catch (error) {
            return res.status(500).send(error);
        }
    },

    async show(req, res){
        try {
            const id = req.params.id;
            const user = await User.findById(id);
            res.status(200).send(user);

        } catch (error) {
            return res.status(500).send(error);
        }
    },
    
    async sessions(req, res){
        try {
            const user = await User.find(req.body);
            return res.status(200).send(user);
            
        } catch (error) {
            return res.status(500).send(error);
        }
    },

    async store(req, res){
        try {
            const user = await User.create(req.body);
            return res.status(201).send(user);

        } catch (error) {
            return res.status(500).send(error);
        }
    },

    async delete(req, res){
        try {
            const user = await User.findByIdAndRemove(req.params.id);
            return res.status(201).send(user);

        } catch (error) {
            return res.status(500).send(error);
        }
    }
}