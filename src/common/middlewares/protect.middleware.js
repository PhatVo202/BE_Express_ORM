import tokenService from "../../services/token.service";
import { UnauthorizedException } from "../helpers/exception.helper";
import { prisma } from "../prisma/init.prisma";

const protect = async (req, res, next) => {
  const authHeader = req.headers?.authorization || "";
  const [type, token] = authHeader.split(" ");
  if (!token || type !== "Bearer") {
    throw new UnauthorizedException("không có token");
  }
  if (type !== "Bearer") {
    throw new UnauthorizedException("Kiểu token không hợp lệ");
  }

  const decode = tokenService.verifyAcessToken(token);

  console.log("decode.email:", decode.email);

  const user = await prisma.nguoi_dung.findUnique({
    where: {
      nguoi_dung_id: decode.userId,
    },
  });

  req.user = user;

  console.log({
    token: token,
    type: type,
    decode: decode,
  });

  next();
};

export default protect;
