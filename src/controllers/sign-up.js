import { Users } from "../models/users.js";

const signUpController = async (req, res) => {
  let addUser = new Users({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try{
  await addUser.save()
  res.json({
    message: "berhasil menambahkan user"
  })
  } catch(err){
    res.json({
      message: err
    })
  }
};

export { signUpController };
