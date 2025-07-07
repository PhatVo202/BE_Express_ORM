import { statusCodes } from "./statu-code.helper";

export class BadrequestException extends Error {
  constructor(message = "BadrequestException") {
    super(message);
    this.code = statusCodes.BAD_REQUEST;
  }
}

export class UnauthorizedException extends Error {
  constructor(message = "UnauthorizedException") {
    super(message);
    this.code = statusCodes.UNAUTHORIZED;
  }
}

export class ForbiddenException extends Error {
  constructor(message = "ForbiddenException") {
    super(message);
    this.code = statusCodes.FORBIDDEN;
  }
}
