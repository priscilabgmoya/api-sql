exports.success = function (res, req, object= "OK", status = 200){
    res.status(status).json({
        error: false, 
        status: status,
        body: object
    })
}

exports.error = function (res, req, object= "ERROR INTERNAL", status = 500){
    res.status(status).json({
        error: true, 
        status: status,
        body: object
    })
}