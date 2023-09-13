export enum StatusCode {
    // 200
    Continue = 100,
    SwitchingProtocols = 101,

    // Success
    Success = 200,
    Created = 201,
    Accepted = 202,

    // Redirection
    MultipleChoices = 300,
    MovedPermanently = 301,

    // Client Errors
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    Forbidden = 403,
    Request_Timeout = 408,
    Conflict = 409,
    Not_Acceptable = 406,

    /// Server Errors
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HttpVersionNotSupported = 505,
    VariantAlsoNegotiates = 506,
    InsufficientStorage = 507,
    LoopDetected = 508,
    NotExtended = 510,

    //Otp
  
    IncorrectOtpCode = 1001,
    ExpiredOtpCode = 1002,
    BlockedOtpCode = 1003,
  }
  