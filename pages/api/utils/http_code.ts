export default class HttpCode {
    static ERROR_LOGIN_ACCOUNT_CODE = 402;
    static ERROR_LOGIN_ACCESS_CODE_CODE = 403;
    static ERROR_LOGIN_USER_CODE = 404;
    static ERROR_LOGIN_PWD_CODE = 405;
    static ERROR_LOGIN_USER_BANNED_CODE = 406;
    static ERROR_LOGIN_ACCESS_CODE_ACTED_CODE = 407;
    static ERROR_LOGIN_ACCESS_CODE_BANNED_CODE = 408;
    static ERROR_REQUEST_METHOD_CODE = 410;
    static ERROR_AUTH_CODE = 201;
    static OK = 200;
    static ERROR = 500;
    static ERROR_AUTH_MSG = "auth error";
    static ERROR_REQUEST_METHOD_MSG = "request method error";
    static ERROR_LOGIN_USER_OR_PWD_MSG = "wrong with account or passwords";
    static ERROR_LOGIN_ACCESS_CODE_MSG = "wrong access code";
    static ERROR_LOGIN_ACCESS_CODE_ACTED_MSG = "access code has been activated";
    static ERROR_LOGIN_ACCESS_CODE_BANNED_MSG = "access code has been banned";
    static ERROR_LOGIN_USER_BANNED_MSG = "account banned";

}
