//  function takes in two arguments, an object and a response object (res).
//   It sets the HTTP status code to 200, indicating a successful response, and sends the object as a JSON response.

export const setSuccessfulResponse = (obj, res) => {
    res.status(200);
    res.json(obj);
}

//  function is similar to setSuccessfulResponse(), 
// but it sets the HTTP status code to 201, indicating a successful POST request.
export const setPostSuccessfulResponse = (obj, res) => {
    res.status(201);
    res.json(obj);
}

//  function takes in a response object (res) and returns a 
// 400 Bad Request status code with an error message indicating that the request body is missing or incomplete.
export const setbodyMissingError = (res) => {
    return res.status(400).json({
        error: {
            message: 'Fields are missing, all fields are required'
        }

    });
}

// function takes in a response object (res) and returns a 404 Not Found status code with a message indicating
// that the requested resource was not found.
export const setnotFound = (res) => {
    return res.status(404).json({
        message: "Not found."
    });
}

// function that sets a 500 status code on the response and sends an error 
// message JSON object in the response body with the error message received as a parameter.
export const setErrorResponse = (err, res) => {
    res.status(500);
    res.json({
        error: {
            message: err.message
        }
    });
}