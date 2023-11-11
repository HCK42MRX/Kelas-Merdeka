import passport from "passport";

const loginController = (req, res, next) => {
  if(req.isAuthenticated()){
    return res.status(200).json({ message: "kamu sudah login." });
  }


  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: "Autentikasi gagal", info });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ message: "Autentikasi berhasil" });
    });
  })(req, res, next);
};

export { loginController };
