import Users from "../models/users.model";
// const users = [
//   { name: "Shyam", email: "shyamjaiswal@gmail.com" },
//   { name: "Bob", email: "bob32@gmail.com" },
//   { name: "Jai", email: "jai87@gmail.com" },
// ];

export default {
  findAll(req, res, next) {
    Users.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  create(req, res) {
    const { name, email, phone } = req.body;
    Users.create({ name, email, phone })
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  findOne(req, res) {
    let { id } = req.params;
    Users.findById(id)
      .then((user) => {
        if (!user) {
          return res.json({ err: "item did not find" });
        }
        return res.json(user);
      })
      .catch((err) => res.status(500).json({ err: "item  did not found" }));
  },
  delete(req, res) {
    let { id } = req.params;
    Users.findByIdAndRemove(id)
      .then((user) => {
        if (!user) {
          return res.json({ err: "item did not find" });
        }
        return res.json(user);
      })
      .catch((err) => res.status(500).json({ err: "item  did not found" }));
  },
  update(req, res) {
    let { id } = req.params;
    const { name, email, phone } = req.body;
    Users.findOneAndUpdate({ _id: id }, { name, email, phone }, { new: true })
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
};
