const { connect } = require('mongoose');

exports.errorHandler = function (errorMessage, errorCode, errorData) {
    const error = new Error();
    error.message = errorMessage;
    error.code = errorCode;
    error.data = errorData
    return error
}


exports.connectToServer = async ( uri, port, app ) => {
    try {
        const connected = await connect(uri)
        if( connected ) {
            console.log('connected to db')
            app.listen(port)
        }

        
    } catch( error ) {
        throw this.errorHandler('something went wrong', 503, error)
    }
}