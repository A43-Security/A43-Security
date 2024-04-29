const User = require('../model/User');

const serveUsers = async (req, res) => {
    const UsersList = await User.list();
    res.send(UsersList);
}

const serveUser = async (req, res) => {
    const { id } = req.params;
    const User = await User.findById(Number(id));

    if (!User) return res.status(404).send(`No User with the id ${id}`);
    res.send(User);
};

const createUser = async (req, res) => {
    const { UserName } = req.body;
    const newUser = await User.create(UserName);
    res.send(newUser);
};


const updateUser = async (req, res) => {
    const { UserName } = req.body;
    const { id } = req.params;
    const updatedUser = await User.editName(Number(id), UserName);
    if (!updatedUser) return res.sendStatus(404);
    res.send(updatedUser);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const didDelete = await User.delete(Number(id));
    const statusCode = didDelete ? 204 : 404;
    res.sendStatus(statusCode);
}

module.exports = {
    serveUsers,
    serveUser,
    createUser,
    updateUser,
    deleteUser
};