exports.errorHandler = function (errorMessage, errorCode, errorData) {
    const error = new Error();
    error.message = errorMessage;
    error.code = errorCode;
    error.data = errorData
    return error
}