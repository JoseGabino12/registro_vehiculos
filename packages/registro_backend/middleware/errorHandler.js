const errorHandler = (err, req, res, next) => {
    return res.status(400).send({msg: err.message});
}

export default errorHandler;
