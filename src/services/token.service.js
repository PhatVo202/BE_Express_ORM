import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_EXPIRES,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES,
  REFRESH_TOKEN_SECRET,
} from "../common/constant/app.constant";
const tokenService = {
  createToken: (userId) => {
    const accessToken = jwt.sign({ userId }, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES,
    });
    const refreshToken = jwt.sign({ userId }, REFRESH_TOKEN_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRES,
    });
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },
  verifyAcessToken: (token, ignoreExpiration = false) => {
    return jwt.verify(token, ACCESS_TOKEN_SECRET, {
      ignoreExpiration: ignoreExpiration,
    });
  },
  verifyrefreshToken: (token, ignoreExpiration = false) => {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
  },
};

export default tokenService;
