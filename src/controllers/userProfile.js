const getUserProfile = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res
      .status(401)
      .json({ success: false, message: "kamu belum login" });
  }
  const userData = req.user;

  return res.status(200).json({ result: userData });
};

export { getUserProfile };
