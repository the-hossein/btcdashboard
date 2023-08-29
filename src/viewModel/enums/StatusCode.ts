export enum StatusCode {
    // 200
    Success = 200,
    Created = 201,
    Accepted = 202,
    //400
    NotFound = 404,
    Forbidden = 403,
    Request_Timeout = 408,
    Conflict = 409,
    Not_Acceptable = 406,
    BadRequest = 400,
  
    //500
    OperationFaild = 500,
    //Otp
  
    IncorrectOtpCode = 1001,
    ExpiredOtpCode = 1002,
    BlockedOtpCode = 1003,
  }
  