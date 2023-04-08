export const setSuccessfulResponse = (obj, res) => {
    res.status(200);
    res.json(obj);
}

export const setErrorResponse = (err, res) => {
    res.status(500);
    res.json({
        error: {
            message: err.message
        }
    });
}

