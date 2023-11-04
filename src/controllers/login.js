import { Users } from "../models/users.js";

const getUserDataFromDatabase = async (username) => {
  try {
    const data = await Users.find({ username });
    return data;
  } catch (err) {
    return err;
  }
};

const loginController = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const data = await getUserDataFromDatabase(username);
  data.forEach((d) => {
    if (d.password === password) {
      console.log("berhasil");
    }
  });
};

export { loginController };
