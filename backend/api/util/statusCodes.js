export const setSuccessfulResponse = (obj, res) => {
    res.status(200);
    res.json(obj);
}


export const setPostSuccessfulResponse = (obj, res) => {
    res.status(201);
    res.json(obj);
}

export const setbodyMissingError = (res) => {
    return res.status(400).json({
        error: {
            message: 'Fields are missing, all fields are required'
        }

    });
}

export const setnotFound = (res) => {
    return res.status(404).json({
        message: "Not found."
    });
}

export const setErrorResponse = (err, res) => {
    res.status(500);
    res.json({
        error: {
            message: err.message
        }
    });
}