import usersModel from "../models/users.models.js";

export const getUsers = async (req, res) => {
  try {
    const allUsers = await usersModel.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const postUsers = async (req, res) => {
  const newUser = new usersModel({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const response = await newUser.save();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const putUsers = (req, res) => {
  res.send("Update Users Successfully");
};

export const deleteUsers = (req, res) => {
  res.send("Delete Users Successfully");
};
